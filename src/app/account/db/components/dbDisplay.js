import { useEffect, useState } from "react";
import { useSession } from "@/app/SessionProvider";
import Main from "@/app/components/mainWrapper";

import Link from "next/link";
import { getDatabase } from "./server/getDatabase";
import Image from "next/image";

const moveFocus = (e, fieldLabel, rowDbId) => {
    if (e.key === 'ArrowUp') {
        console.log(e.target.closest('tr').dataset.rowId)
        // const newId = rowDbId - 1 >= 0 ? rowDbId - 1 : 0;
        // console.log(newId);
        // document.querySelector(`#${fieldLabel}-${newId}`).focus();
    }
    else if (e.key === 'ArrowDown') {
        document.querySelector(`#${fieldLabel}-${rowDbId + 1 || 0}`).focus();
    }
}

const tablify = (fieldValue, fieldLabel, rowDbId) => { // sending in Object.values(y) => y   // Object.keys(y)[zIdx]
    /* example fieldValue = https://... , 1, 0, '', '' */
    // console.log(`${fieldLabel}: ${fieldValue}`);
    let internal;
    switch (fieldLabel) {
        case "src":
            return (<Image src={encodeURI(fieldValue.replace('.webp', '_x300.webp'))} alt="thumbnail" 
                        width={70} height={70}
                        className="object-cover aspect-square w-70 min-w-[70px]"
                        id={`${fieldLabel}-${rowDbId}`}
                    />);
        case "active":
            return (<input type="checkbox" id={`${fieldLabel}-${rowDbId}`}
                        defaultChecked={fieldValue} data-starting-value={fieldValue}
                        onChange={(e) => {console.log('is checked?', e.target.checked)}}
                        className="mx-auto block h-full min-h-[70px]"
                    />);
        case "alt":
        case "title":
        case "description":
        case "data_tags":
        default:
            return (<input id={`${fieldLabel}-${rowDbId}`}
                defaultValue={fieldValue || ''} data-starting-value={fieldValue}
                onChange={(e) => {console.log('new value', e.target.value)}}
                onKeyUp={(e) => { moveFocus(e, fieldLabel, rowDbId) }}
                className="border-[1px] block h-full min-h-[70px]"
            />);
    }
}

export default function Database(props) {
    const [emptyFields, setEmptyFields] = useState([]);
    const [data, setData] = useState([]);
    const{ updateSession } = useSession();
    const sessionData = useSession().sessionData;

    const checkboxHandler = (e) => {
        const group = e.target.closest('[id*="-group"]');
        if (!e.target.closest('label') && !e.target.closest('input')) {
            group.querySelector('input').click();
        }
        if (e.target.closest('input')) {
            const checkedInputs = Array.from(document.querySelectorAll('#empty-field-filters input:checked')).map(x => x.name);
            setEmptyFields(checkedInputs)
        }
    }

    const submitTableData = () => {
        if(window.confirm('Are you sure you want to submit this data?')) {
            // proceed
            // check out which values have changed, build a query but don't send it yet.
            let changed = Array.from(document.querySelectorAll('table input:not([id*="active"])')).filter(x => x.dataset.startingValue !== x.value);
            changed.push([...Array.from(document.querySelectorAll('table input[id*="active"]')).filter(x => (x.dataset.startingValue == 1 && !x.checked) || (x.dataset.startingValue == 0 && x.checked))]);

            for (const line of changed) {
                let newValue = line.value;
                if (line.id.includes('active')) {
                    newValue = line.checked ? 1 : 0;
                }
                let column = line.id.split('-')[0];
                let dbId = line.id.split('-')[1];
                // UPDATE table SET column = newValue WHERE id = dbId;
            }


        }
        else {
            console.log('do nothing')
        }
    }

    useEffect(() => {
        let cancelled = false;

        const apply = (scopedData) => {
            if (cancelled) return;
            setData(scopedData);
        }

        const cached = sessionData?.[`${props.db}`];
        if (cached?.length) {
            console.log('we have a cache')
            apply(cached);
            return () => { cancelled = true; };
        }

        (async () => {
            try {
                const response = await getDatabase(props.db);
                if (cancelled) return;
                if (!response) {
                    console.error('No data to see here.');
                    return;
                }

                const sessionUpdater = {};
                sessionUpdater[`${props.db}`] = response;
                updateSession(sessionUpdater);
                apply(response);
            }
            catch (err) {
                console.error(err);
            }
        })();
        
        return () => { cancelled = true; };
    }, [sessionData, updateSession]);

    return (
        <>
            <div id="empty-field-filters" className="flex flex-row flex-wrap my-8">
                {props.filters?.map((filter, idx) => 
                    <div key={filter} id={`${filter}-group`} className={`flex flex-row cursor-pointer ${idx > 0 ? 'ml-8' : ''}`}
                        onClick={(e) => { checkboxHandler(e) }}
                    >
                        <label htmlFor={filter} className="mr-2 cursor-pointer">
                            {filter}
                        </label>
                        <input type="checkbox" id={filter} name={filter}
                            className="w-4 cursor-pointer"
                        />
                    </div>
                )}
            </div>

            { data && data?.length && Array.isArray(data) ?
                <>
                    <div className="overflow-x-scroll w-full overflow-y-scroll max-h-[80vh]">
                        <table className="bg-[#c4c4c4a1]">
                            <tbody>
                                <tr>
                                    {Object.keys(data[0]).map(x =>
                                        <th key={x} data-field-label={x}
                                            className="bg-[#fafafa]"
                                        >
                                            {x}
                                        </th>
                                    )}
                                </tr>
                                {data?.map((y, yIdx) =>
                                    <tr key={yIdx} data-row-id={yIdx}
                                        className="items-center"
                                    >
                                        {Object.values(y).map((z, zIdx) =>
                                            <td key={zIdx} data-field-label={Object.keys(data[0])[zIdx]}
                                                className="h-full"
                                            >
                                                {tablify(z, Object.keys(y)[zIdx], y.id)}
                                            </td>
                                        )}
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <button onClick={submitTableData} alt='submit table data'
                        className="z-30 fixed bottom-4 right-12 bg-[#a20000] text-white px-4 py-2 rounded-[8px] border-[#222] border-[2px] font-bold hover:bg-[#222]"
                    >
                        Submit
                    </button>
                </>
            : ''}
        </>
    );
}

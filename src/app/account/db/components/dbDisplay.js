import { useEffect, useState } from "react";
import { useSession } from "@/app/SessionProvider";
import { getDatabase, updateDatabase } from "./server/getDatabase";
import { tablify, newLine } from "./server/dbHelpers";

export default function Database(props) {
    const [emptyFields, setEmptyFields] = useState([]);
    const [data, setData] = useState([]);
    const [addedLines, setAddedLines] = useState([]);

    const{ updateSession } = useSession();
    const sessionData = useSession().sessionData;

    const filterRows = (checkedInputs) => {
        const rows = Array.from(document.querySelectorAll(`tr[data-all-values]`));
        rows.forEach(row => row.classList.remove('hidden'));
        
        if (!checkedInputs.length) return;

        let rowsWithEmptyFields = rows.slice(0, 5).filter(row => row.dataset.allValues.split('._._.').filter(val => val.endsWith('=')).length);
        for (const row of rowsWithEmptyFields) {
            let thisRowsEmptyValues = row.dataset.allValues.split('._._.').filter(val => val.endsWith('=')).map(emptyVal => emptyVal.replace('=', ''));
            const hasOverlap = checkedInputs.some(item => thisRowsEmptyValues.includes(item));
            if (!hasOverlap) row.classList.add('hidden');
        }
    }

    const filterCheckboxHandler = (e) => {
        const group = e.target.closest('[id*="-group"]');
        if (!e.target.closest('label') && !e.target.closest('input')) {
            group.querySelector('input').click();
        }
        if (e.target.closest('input')) {
            const checkedInputs = Array.from(document.querySelectorAll('#empty-field-filters input:checked')).map(x => x.name);
            filterRows(checkedInputs);
            setEmptyFields(checkedInputs);
        }
    }

    const submitTableData = async () => {
        if(window.confirm('Are you sure you want to submit this data?')) {
            // proceed
            // check out which values have changed, build a query but don't send it yet.
            let changed = Array.from(document.querySelectorAll('table input:not([id*="active"])')).filter(x => x.dataset.startingValue !== x.value);
            changed.push(...Array.from(document.querySelectorAll('table input[id*="active"]')).filter(x => (x.dataset.startingValue == 1 && !x.checked) || (x.dataset.startingValue == 0 && x.checked)));

            // freeze all inputs.
            Array.from(document.querySelectorAll('input, button[type="submit"]')).map( x => { x.disabled = true; });

            let dbPushData = { table: props.db, updates: [] };

            for (const line of changed) {
                let newValue = line.value;
                if (line.id.includes('active')) newValue = line.checked ? 1 : 0;
                let column = line.id.split('-')[0];
                let dbId = line.id.split('-')[1];
                // UPDATE table SET column = newValue WHERE id = dbId;
                // send table, column, new value, and dbId
                
                dbPushData.updates.push({
                    field: column,
                    value: newValue,
                    id: dbId,
                });
            }

            if (!dbPushData.updates.length) {
                window.alert('No changes detected.');
                return;
            }

            // okee, send off the data now.
            const completedUpdates = await updateDatabase(dbPushData);
            if (completedUpdates?.length) {
                window.alert(`Made updates to ${completedUpdates.length} row${completedUpdates.length > 1 ? 's' : ''}.`);
            }
            window.location.reload();
        }
    }

    useEffect(() => {
        let cancelled = false;

        const checkedInputs = Array.from(document.querySelectorAll('#empty-field-filters input:checked')).map(x => x.name);
        filterRows(checkedInputs);

        const apply = (scopedData) => {
            if (cancelled) return;
            setData(scopedData);
        }

        const cached = sessionData?.[`${props.db}`];
        if (cached?.length) {
            apply(cached);
            return () => { cancelled = true; };
        }

        (async () => {
            try {
                const response = await getDatabase(props.db, props.selects, props.whereNulls);
                if (cancelled) return;
                if (!response || typeof(response) == 'string') {
                    console.error('DB error!', response);
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
    }, [sessionData, updateSession, props.db, emptyFields, props.selects, props.whereNulls]);

    return (
        <>
            <div id="empty-field-filters" className="flex flex-row flex-wrap my-8">
                {props.filters?.map((filter, idx) => 
                    <div key={filter} id={`${filter}-group`} className={`flex flex-row cursor-pointer ${idx > 0 ? 'ml-8' : ''}`}
                        onClick={(e) => { filterCheckboxHandler(e) }}
                    >
                        <label htmlFor={filter} className="mr-2 cursor-pointer">
                            {filter}
                        </label>
                        <input type="checkbox" id={filter} name={filter}
                            className="w-4 cursor-pointer" defaultChecked={emptyFields.includes(filter)}
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
                                        data-all-values={Object.keys(y).map(a => `${a}=${y[a]}`).join('._._.')} // joining with a string I'm not likely to encounter inside of any of the values.
                                        className="items-center"
                                    >
                                        {Object.values(y).map((z, zIdx) =>
                                            <td key={zIdx} data-field-label={Object.keys(data[0])[zIdx]}
                                                className={`h-full ${Object.keys(data[0])[zIdx] == 'photos' ? 'flex flex-row' : ''}`}
                                            >
                                                {tablify(z, Object.keys(y)[zIdx], y.id)}
                                            </td>
                                        )}
                                    </tr>
                                )}
                                {/* { addedLines ? addedLines.map(x => x) : ''} */}
                            </tbody>
                        </table>
                    </div>
                    <button onClick={submitTableData} type="submit"
                        alt="submit table data"
                        className="z-30 fixed bottom-4 right-12 bg-[#a20000] text-white px-4 py-2 rounded-[8px] border-[#222] border-[2px] font-bold hover:bg-[#222]"
                    >
                        Submit
                    </button>
                </>
            : ''}
        </>
    );
}

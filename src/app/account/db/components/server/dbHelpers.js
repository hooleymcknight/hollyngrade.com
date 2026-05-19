import Image from "next/image";

const moveFocus = (e, fieldLabel) => {
    if (e.key === 'ArrowUp') {
        const currRowId = Number(e.target.closest('tr').dataset.rowId);
        const newRowId = currRowId - 1 >= 0 ? currRowId - 1 : 0;
        document.querySelector(`tr[data-row-id="${newRowId}"] input[id*="${fieldLabel}"]`).focus();
    }
    else if (e.key === 'ArrowDown') {
        const allRows = Array.from(document.querySelectorAll('tr[data-row-id]'));
        const maxId = allRows[allRows.length - 1].dataset.rowId;
        const currRowId = Number(e.target.closest('tr').dataset.rowId);
        const newRowId = currRowId - 1 <= maxId ? currRowId + 1 : maxId;
        document.querySelector(`tr[data-row-id="${newRowId}"] input[id*="${fieldLabel}"]`).focus();
    }
}

export const tablify = (fieldValue, fieldLabel, rowDbId) => {
    /* example fieldValue = https://... , 1, 0, '', '' */
    switch (fieldLabel) {
        case "photos":
            let srcs = fieldValue?.split(',').map(x => x.trim());
            return (
                <>
                    <input id={`${fieldLabel}-${rowDbId}`}
                        defaultValue={fieldValue || ''} data-starting-value={fieldValue}
                        onChange={(e) => { }}
                        onKeyUp={(e) => { moveFocus(e, fieldLabel, rowDbId) }}
                        className="border-[1px] block h-full min-h-[70px]"
                    />
                    {srcs?.map(src => 
                        <Image key={src} src={encodeURI(src)} alt="thumbnail"
                            width={70} height={70}
                            className="object-cover aspect-square w-70 min-w-[70px]"
                            id={`${fieldLabel}-${rowDbId}`}
                        />
                    ) || ''}
                </>
            );
        case "src":
            return (<Image src={encodeURI(fieldValue.replace('.webp', '_x300.webp'))} alt="thumbnail" 
                        width={70} height={70}
                        className="object-cover aspect-square w-70 min-w-[70px]"
                        id={`${fieldLabel}-${rowDbId}`}
                    />);
        case "active":
            return (<input type="checkbox" id={`${fieldLabel}-${rowDbId}`}
                        defaultChecked={fieldValue} data-starting-value={fieldValue}
                        onChange={(e) => { }}
                        className="mx-auto block h-full min-h-[70px]"
                    />);
        case "alt":
        case "title":
        case "description":
        case "data_tags":
        default:
            // return (<input id={`${fieldLabel}-${rowDbId}`}
            return (<textarea id={`${fieldLabel}-${rowDbId}`}
                defaultValue={fieldValue || ''} data-starting-value={fieldValue}
                onChange={(e) => { }}
                // onKeyUp={(e) => { moveFocus(e, fieldLabel, rowDbId) }}
                className="border-[1px] block h-full min-h-[70px]"
            />);
    }
}
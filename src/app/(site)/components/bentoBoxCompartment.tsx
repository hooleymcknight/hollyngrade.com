import { ReactNode } from "react";
import '@/app/(site)/styles/bento.css';

type BentoProps = {
    children: React.ReactNode;
    startCol?: number;
    endCol?: number;
    startRow?: number;
    endRow?: number;
    vAlign?: "top" | "middle" | "bottom";
}

export default function BentoBoxCompartment ({children, startCol, endCol, startRow, endRow, vAlign}: BentoProps) {

    return (
        <div className={"bento-box-compartment p-[40px] flex flex-col" + 
            (vAlign ? ` ${vAlign}` : '')
        }
            style={{ gridColumn: `${startCol} / ${endCol}`, gridRow: `${startRow} / ${endRow}` }}
        >
            {children}
        </div>
    );
}
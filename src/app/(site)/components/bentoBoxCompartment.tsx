import React from 'react';
import '@/app/(site)/styles/bento.css';

type BentoProps = {
    children: React.ReactNode;
    startCol?: number;
    endCol?: number;
    startRow?: number;
    endRow?: number;
    vAlign?: "top" | "middle" | "bottom";
    style?: React.CSSProperties;
    classes?: string;
}

export default function BentoBoxCompartment ({children, startCol, endCol, startRow, endRow, vAlign, style, classes}: BentoProps) {

    return (
        <div className={"bento-box-compartment p-[40px] flex flex-col " + classes +
            (vAlign ? ` ${vAlign}` : '')
        }
            style={{ '--col': `${startCol} / ${endCol}`, '--row': `${startRow} / ${endRow}`, ...style } as React.CSSProperties }
        >
            {children}
        </div>
    );
}
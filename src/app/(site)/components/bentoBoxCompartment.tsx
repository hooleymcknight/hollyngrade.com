import { ReactNode } from "react";

type Props = {
    children: ReactNode
}

export default function BentoBoxCompartment ({children}: Props, props?: any) {
    return (
        <div>
            {children}
        </div>
    );
}
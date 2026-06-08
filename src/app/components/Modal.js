"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, onClose, children }) {

    // useEffect: handle Escape key + body scroll lock when modal's open
    useEffect(() => {
        if (!open) return;
        
        const onKey = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKey);
        
        // Lock body scroll
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        
        // Cleanup on unmount or when open becomes false
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [open, onClose]);

    if (!open) return null;

    return createPortal(
        <div /* bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden **/
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-1 border border-neutral-200"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button" className="text-3xl ml-auto px-2 block hover:text-black hover:font-bold"
                    onClick={onClose}
                >
                    {`\u00D7`}
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
}
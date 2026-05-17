const toArray = (input) => {
    return Array.isArray(input) ? input : [input];
}

export default function Main(props) {

    const children = toArray(props.children);
    const ids = toArray(props.contentIds);
    const divClasses = toArray(props.divClasses);

    return (
        <main className={`${props.mainClasses || ''} flex flex-col min-h-screen items-center justify-center`}>
            {children.map((child, idx) =>
                <div key={idx} id={ids[idx] || ''}
                    className={`flex flex-col w-[95%] max-w-3xl items-center justify-between
                        py-8 px-8 sm:p-16 bg-zinc-50 sm:items-start mt-8 ${idx > 0 ? 'mb-8' : '0'} 
                        ${divClasses[idx] || ''}`
                    }
                    style={{ background: "rgba(250, 250, 250, 0.6)" }}
                >
                    {child}
                </div>
            )}
        </main>
    );
}
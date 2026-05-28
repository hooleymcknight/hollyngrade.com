const toArray = (input) => {
    return Array.isArray(input) ? input : [input];
}

export default function Main({ id, classes, styles, children }) {
    if (!styles) styles = {};

    let idx = 0;
    // make first child of these things have margin bottom 0
    // and all else have margin bottom 8

    return (
        <div id={id || ''}
            className={`flex flex-col w-[95%] max-w-3xl items-center justify-between
                py-8 px-4 sm:p-16 bg-zinc-50 sm:items-start mt-8 ${idx > 0 ? 'mb-8' : '0'} 
                ${classes || ''}`
            }
            style={{ ...styles, background: "rgba(250, 250, 250, 0.6)" }}
        >
            {children.props.children}
        </div>
    );
}
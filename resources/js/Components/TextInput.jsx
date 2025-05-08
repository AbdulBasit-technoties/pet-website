import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                {...props}
                type={type}
                {...(type === 'file' ? { value: undefined } : {})}
                className={
                    'w-full border border-[#E8E8E8] px-5 py-3 rounded focus:outline-none focus:border-c1 text-[#000] !ring-0 ' +
                    className
                }
                ref={input}
            />

        </div>
    );
});

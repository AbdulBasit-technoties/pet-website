import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextareaInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <textarea
            rows="4"
            {...props}
            className={
                'w-full border border-[#E8E8E8] px-5 py-3 rounded focus:outline-none focus:border-c1 text-[#000] !ring-0 ' +
                className
            }
            ref={input}
        ></textarea>
    );
});

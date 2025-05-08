export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 font-medium bg-c1 border border-transparent rounded text-[14px] text-white capitalize hover:border-c1 hover:bg-transparent hover:text-c1 transition-all duration-500 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}

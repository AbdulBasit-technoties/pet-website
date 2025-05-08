export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block font-medium text-[16px] text-[#000] ` + className}>
            {value ? value : children}
        </label>
    );
}

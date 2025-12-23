export default function Input({ value, onChange, onKeyDown, placeholder, type="text", className }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      className={`
        flex-1
        border border-orange-500/50
        bg-[#1e1f29] text-orange-300
        placeholder-orange-600
        p-3 rounded-lg
        focus:outline-none focus:ring-2 focus:ring-orange-400
        ${className}
      `}
    />
  );
}

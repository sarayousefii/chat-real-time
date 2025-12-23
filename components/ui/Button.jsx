export default function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`
        bg-orange-500
        text-black
        px-5 py-2
        rounded-lg
        hover:bg-orange-600
        focus:outline-none focus:ring-2 focus:ring-orange-400
        transition-colors
        ${className}
      `}
    >
      {children}
    </button>
  );
}

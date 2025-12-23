export function Card({ children, className }) {
  return (
    <div
      className={`
        bg-[#0f111a]
        shadow-md
        rounded-lg
        p-4
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className }) {
  return <h2 className={`text-orange-400 text-xl font-bold ${className}`}>{children}</h2>;
}

export function CardContent({ children, className }) {
  return <div className={`text-orange-200 ${className}`}>{children}</div>;
}

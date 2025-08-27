export default function CartButton({
  children,
  onClick,
  type = "button",
  variant = "default", // "remove", "danger", "success"
  className = "",
}) {
  // Base style
  const base = "px-4 py-2 rounded font-medium transition duration-200";

  // Variants
  const variants = {
    remove: "text-red-600 hover:underline px-0 py-0", // inline text link
    danger: "bg-red-500 text-white hover:bg-red-700",
    success: "bg-green-400 text-white hover:bg-green-600 w-full",
    default: "bg-gray-200 text-black hover:bg-gray-300",
  };

  const style = variants[variant] || variants.default;

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${base} ${style} ${className}`}
    >
      {children}
    </button>
  );
}

import { Link } from "react-router";

export default function Button({
  to,
  children,
  onClick,
  disabled = false,
  loading = false,
  variant = "primary", // primary, secondary, white, etc
  className = "",
}) {
  // Base styles
  const base =
    "px-5 py-2.5 font-medium rounded-lg shadow-lg transition duration-200";

  // Variants
  const variants = {
    primary: "bg-[#8116b4] hover:bg-[#453979] text-white",
    secondary: "bg-white text-black border border-gray-400 hover:bg-[#8116b4] hover:text-[#F7F4ED]",
    disabled: "bg-[#7a6bb7] cursor-not-allowed text-white",
  };

  const style =
    disabled || loading ? variants.disabled : variants[variant] || variants.primary;

  // If `to` is passed → render Link, else → render button
  if (to) {
    return (
      <Link to={to}>
        <button
          onClick={onClick}
          disabled={disabled || loading}
          className={`${base} ${style} ${className}`}
        >
          {loading ? "Loading..." : children}
        </button>
      </Link>
    );
  }

  return (
    <>
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${base} ${style} ${className}`}
    >
      {loading ? "Loading..." : children}
    </button>
    </>
  );
}
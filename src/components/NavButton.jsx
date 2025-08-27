import { Link, useNavigate } from "react-router";
import { FaChevronLeft } from "react-icons/fa";

export default function NavButton({ 
  to, 
  goBack = false, 
  label, 
  className = "" 
}) {
  const navigate = useNavigate();

  const baseStyle =
    "ml-10 mt-6 px-1.5 py-1.5 text-white rounded font-medium bg-[#9C88FF] hover:bg-[#453979] transition text-sm md:text-base";

  const content = (
    <span className="flex items-center space-x-1">
      <FaChevronLeft />
      <span>{label}</span>
    </span>
  );

  // Case 1: use navigate(-1)
  if (goBack) {
    return (
      <button onClick={() => navigate(-1)} className={`${baseStyle} ${className}`}>
        {content}
      </button>
    );
  }

  // Case 2: use Link
  return (
    <Link to={to}>
      <button className={`${baseStyle} ${className}`}>
        {content}
      </button>
    </Link>
  );
}

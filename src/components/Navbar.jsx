// import { useState, useEffect } from "react";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { Link } from "react-router";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // controls sidebar open/close
    const [scrolled, setScrolled] = useState(false); // controls scroll behavior

    // Toggle the sidebar
    const handleToggle = () => setIsOpen(!isOpen);

    // Close sidebar when a link is clicked (common mobile UX)
    const handleLinkClick = () => setIsOpen(false);

    // Detect scroll to change navbar styles
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const { cartItems } = useCart();
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <nav
            className={`flex items-center justify-between sticky top-0 w-full py-3 px-6 transition-all duration-300 shadow z-50 ${scrolled ? "bg-[#A7B97E]" : "bg-transparent"
                }`}
        >
            {/* Logo */}
            <div>
                <Link to="/"
                    className={`nav-text font-bold transition-colors duration-200 ${scrolled ? "text-[#F7F4ED] hover:text-[#8116b4]" : "text-slate-800 hover:text-[#8116b4]"
                        }`}
                >
                    <div className="leading-none">
                        <span className="block">KANZONI</span>
                        <span className="block">COSMETICS</span>
                    </div>
                </Link>
            </div>

            <div className="flex gap-4 md:gap-6">
                {/* Cart Icon — shown on both screen sizes but positioned differently */}
                <div className="md:order-2 order-1">
                    <Link to="/cart" className={`relative text-2xl ${scrolled ? "text-[#F7F4ED]" : "text-[#333333]"}`}>

                        <span className="absolute -top-2 -right-3 bg-[#9C88FF] text-white rounded-full px-2 text-sm">
                            {totalItems}
                        </span>

                        <FaShoppingCart />
                    </Link>
                </div>

                {/* Hamburger (visible only on small screens) */}
                <div className="md:hidden">
                    <button
                        onClick={handleToggle}
                        className={`nav-text focus:outline-none transition-colors duration-200 ${scrolled ? "text-[#F7F4ED] hover:text-[#8116b4]" : "text-slate-800 hover:text-[#8116b4]"
                            }`}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                {/* Sidebar / Nav links */}
                <div
                    className={`text-slate-800 p-4 md:p-0 md:text-sm font-semibold ${scrolled ? "md:text-white" : "md:text-slate-800"
                        } fixed inset-y-0 left-0 w-[300px] flex flex-col items-start gap-8 bg-[#F7F4ED] shadow-xl z-40 transition-transform duration-300 ease-in-out
                        md:static md:flex-row md:w-auto md:max-w-none md:bg-transparent md:shadow-none md:z-auto md:gap-10 md:items-center ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                        }`}
                >
                    {/* Close button (only visible on mobile) */}
                    <button
                        onClick={handleToggle}
                        className="absolute top-4 right-4 md:hidden focus:outline-none text-gray-600 hover:text-[#8116b4]"
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    {[
                        { href: "/", label: "HOME" },
                        { href: "/about-us", label: "ABOUT US" },
                        { href: "/process", label: "PROCESS" },
                        { href: "/contact", label: "CONTACT" },
                    ].map((item) => (
                        <NavLink
                            key={item.href}
                            to={item.href}
                            onClick={handleLinkClick}
                            className={({ isActive }) =>
                                `nav-text transition-colors duration-200 hover:text-[#8116b4] ${isActive ? "text-[#8116b4] font-bold" : ""
                                }`
                            }
                        >
                            <span>{item.label}</span>
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
}
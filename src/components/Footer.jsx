import logo from "../assets/images/logo.jpeg";
import { Link } from "react-router";

export default function Footer() {
    return (
        <>
        <footer className="w-full bg-[#A7B97E] text-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8">
                
                <div>
                    <img src={logo} alt="Kanzoni Logo" className="w-20 h-20 object-cover mb-2" />
                    <p className="text-xs">
                        <span className="text-xs font-medium">Kanzoni Cosmetics Industry Ltd. </span>
                        Bringing you the finest, natural shea butter products from Ghana.
                    </p>
                </div>

                <div className="md:col-span-2 md:ml-12">
                    <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
                    <ul className="flex flex-wrap gap-8 text-sm">
                        <li>
                            <Link to="/" className="font-medium hover:underline block">Home</Link>
                            <ul className="mt-1 space-y-1 text-gray-600">
                                <li><Link to="/about-us" className="hover:underline">Our Story</Link></li>
                                <li><a href="/#" className="hover:underline">Our Product</a></li>
                                <li><a href="/#" className="hover:underline">Shop Now</a></li>
                            </ul>
                        </li>
                        
                        <li>
                            <Link to="/about-us" className="font-medium hover:underline block">About</Link>
                            <ul className="mt-1 space-y-1 text-gray-600">
                                <li><a href="/" className="hover:underline">Mission</a></li>
                                <li><a href="/" className="hover:underline">Team</a></li>
                            </ul>
                        </li>

                        <li>
                            <Link to="/process" className="font-medium hover:underline block">Process</Link>
                            <ul className="mt-1 space-y-1 text-gray-600">
                                <li><a href="/process#sourcing" className="hover:underline">Sourcing</a></li>
                                <li><a href="/process#packaging" className="hover:underline">Packaging</a></li>
                            </ul>
                        </li>

                        <li>
                            <Link to="/contact" className="font-medium hover:underline block">Contact</Link>
                            <ul className="mt-1 space-y-1 text-gray-600">
                                <li><a href="/contact#location" className="hover:underline">Address</a></li>
                                <li><a href="/contact#form" className="hover:underline">--------</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="md:col-span-2 md:ml-20">
                    <h3 className="font-semibold text-lg mb-3">Contact</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Email: <a href="mailto:kanzonicosmetics@gmail.com" className="hover:underline">kanzonicosmetics@gmail.com</a></li>
                        <li>Phone: +233 000 000 000</li>
                        <li>Location: Tamale, Ghana</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Instagram</a></li>
                        <li><a href="#" className="hover:underline">Facebook</a></li>
                        <li><a href="#" className="hover:underline">LinkedIn</a></li>
                    </ul>
                </div>
            </div>

            <div className="text-center text-sm py-4 border-t border-gray-300">
                © {new Date().getFullYear()} Kanzoni Cosmetics Industry Ltd. All rights reserved.
            </div>
        </footer>
        </>
    );
}

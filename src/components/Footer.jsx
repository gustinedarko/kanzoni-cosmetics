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

          <div className="md:col-span-2 md:ml-5">
            <h3 className="font-medium text-base mb-3">Quick Links</h3>
            <ul className="flex flex-wrap gap-6 text-sm">
              <li>
                <Link to="/" className="font-medium hover:underline block">Home</Link>
                <ul className="mt-1 space-y-1 text-gray-600">
                  <li><Link to="/about-us" className="hover:underline">Our Story</Link></li>
                  <li><a href="/#" className="hover:underline">Expolore</a></li>
                  <li><a href="/#" className="hover:underline">Shop Now</a></li>
                  <li><a href="/#" className="hover:underline">Ingredients</a></li>
                </ul>
              </li>

              <li>
                <Link to="/about-us" className="font-medium hover:underline block">About</Link>
                <ul className="mt-1 space-y-1 text-gray-600">
                  <li><Link to="/about-us" className="hover:underline">Why & Who</Link></li>
                  <li><Link to="/about-us" className="hover:underline">Our Story</Link></li>
                  <li><Link to="/about-us" className="hover:underline">Founder</Link></li>
                  <li><Link to="/about-us" className="hover:underline">Mission</Link></li>
                </ul>
              </li>

              <li>
                <Link to="/process" className="font-medium hover:underline block">Process</Link>
                <ul className="mt-1 space-y-1 text-gray-600">
                  <li><Link to="/process" className="hover:underline">Craft</Link></li>
                  <li><Link to="/process" className="hover:underline">Did You</Link></li>
                  <li><a href="/process#sourcing" className="hover:underline">Packaging</a></li>
                  <li><a href="/process#sourcing" className="hover:underline">Impact</a></li>
                </ul>
              </li>

              <li>
                <Link to="/contact" className="font-medium hover:underline block">Contact</Link>
                <ul className="mt-1 space-y-1 text-gray-600">
                  <li><Link to="/cart" className="hover:underline">Cart</Link></li>
                  <li><a href="/contact#location" className="hover:underline">Address</a></li>
                  <li><a href="/contact#form" className="hover:underline">Email Us</a></li>
                  <li><a href="/contact#form" className="hover:underline">Map</a></li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 md:ml-18">
            <h3 className="font-medium text-base mb-3">How to Reach Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: <a href="mailto:pkanzonicosmetics@yahoo.com" className="hover:underline">pkanzonicosmetics@yahoo.com</a></li>
              <li>Phone: <a href="tel:+233501234567" className="hover:underline">+233 541 958 490</a></li>
              <li>WhatsApp: <a href="https://wa.me/233541958490" target="_blank"
                rel="noopener noreferrer" className="hover:underline">+233 541 958 490</a></li>
              <li>Location: Walewale, Ghana</li>
            </ul>
          </div>

          <div className="md:ml-5">
            <h3 className="font-medium text-base mb-3">Follow Us</h3>
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

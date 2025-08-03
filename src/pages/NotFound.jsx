import AlertBar from "../components/AlertBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
    return (
        <>
            <AlertBar />
            <Navbar />
            <div className="min-h-screen bg-[#f9f5ff] flex flex-col items-center justify-center text-center px-4 py-10">
                <h1 className="text-7xl font-extrabold text-[#9C88FF] mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Oops! Page Not Found</h2>
                <p className="text-gray-600 max-w-md mb-6">
                    The page you're looking for doesn’t exist or might have been moved. But don’t worry, let’s get you back on track.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#9C88FF] text-white font-medium rounded-full hover:bg-[#7e6dda] transition"
                >
                    <FaArrowLeft /> Back to Home
                </Link>
            </div>
            <Footer />
        </>
    );
}
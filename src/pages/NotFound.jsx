import AlertBar from "../components/AlertBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
    return (
        <>
        <AlertBar />
        <Navbar />
        <h1 className="text-4xl text-yellow-600 flex justify-center">This the NotFound Page</h1>
        <Footer />
        </>
    );
}
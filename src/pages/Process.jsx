import AlertBar from "../components/AlertBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Process() {
    return (
        <>
        <AlertBar />
        <Navbar />
        <h1 className="text-4xl text-yellow-600 flex justify-center">Welcome to the Kanzoni Products Process Page</h1>
        <Footer />
        </>
    );
}
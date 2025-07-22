import { useEffect, useState } from "react";
import AlertBar from "../components/AlertBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "../assets/images/istockphoto-A.jpg";
import img2 from "../assets/images/kaeme-unsplash.jpg";
import img3 from "../assets/images/istockphoto-B.jpg";

const images = [img1, img2, img3];

export default function ProductsHome() {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <AlertBar />
            <Navbar />

            {/* Hero slider section */}
            <section className="w-full h-screen relative overflow-hidden">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`slide-${index}`}
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                    />
                ))}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                    <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
                        Welcome to the Kanzoni Cosmetics
                    </h1>
                </div>
            </section>

            <section className="w-full h-screen bg-white"></section>
            <Footer />
        </>
    );
}

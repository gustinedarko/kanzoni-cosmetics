import { useEffect, useState } from "react";
import AlertBar from "../components/AlertBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "../assets/images/istockphoto-A.jpg";
import img2 from "../assets/images/kaeme-unsplash.jpg";
import img3 from "../assets/images/istockphoto-B.jpg";
import cropCream from "../assets/images/cream-crop.jpeg"
import cropLotion from "../assets/images/lotion-crop.jpeg"
import cropShowergel from "../assets/images/shower-gel-crop.jpeg"
import cropSoap from "../assets/images/black-soap-crop.jpeg"

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
                        className={`absolute top-0 left-0 w-full h-full  object-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                    />
                ))}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                    <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
                        Welcome to the Kanzoni Cosmetics
                    </h1>
                </div>
            </section>

            <section className="w-full h-screen bg-[#F7F4ED] flex items-center justify-center">
                <div className="w-2/3">
                    <h2 className="flex justify-center">Kanzoni</h2>
                    <h3 className="flex justify-center">Represents ........</h3>
                    <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, explicabo soluta. Id vel, fugit assumenda cupiditate quae saepe beatae totam velit voluptatem omnis impedit earum magnam iure accusantium tempora consectetur qui cumque praesentium maxime, enim, ab aliquam? Ducimus sequi facere voluptas praesentium quibusdam a quod eligendi pariatur reiciendis perspiciatis. Doloremque?</p>
                    <span className="flex justify-center"><button>Our story</button></span>
                    <p className="flex justify-center">Products</p>
                </div>
            </section>
            <section
                style={{
                    backgroundImage: `url(${cropCream})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',
                    backgroundAttachment: 'fixed',
                }}
                className="w-full h-full md:h-screen">
                <div className="w-full h-screen flex items-start justify-center pt-[90%] sm:pt-[70%] md:pt-[40%] lg:pt-[35%]">
                    <button className="bg-white text-black px-6 py-3 rounded shadow-lg">Shop Now</button>
                </div>
            </section>
            <section
                style={{
                    backgroundImage: `url(${cropLotion})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',
                    backgroundAttachment: 'fixed',
                }}
                className="w-full h-full md:h-screen">
                <div className="w-full h-screen flex items-start justify-center pt-[90%] sm:pt-[70%] md:pt-[40%] lg:pt-[35%]">
                    <button className="bg-white text-black px-6 py-3 rounded shadow-lg">Shop Now</button>
                </div>
            </section>
            <section
                style={{
                    backgroundImage: `url(${cropShowergel})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',
                    backgroundAttachment: 'fixed',
                }}
                className="w-full h-full md:h-screen">
                <div className="w-full h-screen flex items-start justify-center pt-[90%] sm:pt-[70%] md:pt-[40%] lg:pt-[35%]">
                    <button className="bg-white text-black px-6 py-3 rounded shadow-lg">Shop Now</button>
                </div>
            </section>
            <section
                style={{
                    backgroundImage: `url(${cropSoap})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',
                    backgroundAttachment: 'fixed',
                }}
                className="w-full h-full md:h-screen">
                <div className="w-full h-screen flex items-start justify-center pt-[90%] sm:pt-[70%] md:pt-[40%] lg:pt-[35%]">
                    <button className="bg-white text-black px-6 py-3 rounded shadow-lg">Shop Now</button>
                </div>
            </section>
            <section className="w-full h-screen"></section>
            <Footer />
        </>
    );
}

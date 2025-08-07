import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import imgA from "../assets/images/megumi.jpg";
import imgB from "../assets/images/leighann.jpg";
import imgC from "../assets/images/aurelia.jpg";

const heroImages = [imgA, imgB, imgC];

export default function HeroHomeSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000); // 5 seconds per slide

        return () => clearInterval(slideInterval);
    }, []);

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <>
            <div className="relative w-full h-screen overflow-hidden">
                {heroImages.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-0'
                            }`}
                        style={{ backgroundImage: `url(${image})` }}
                    />
                ))}

                {/* Overlay Content */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-opacity-30">
                    <h1 className="text-[#5C4D9A] text-5xl md:text-6xl font-bold text-center">
                        Kanzoni
                    </h1>
                    <h1 className="text-[#5C4D9A] text-5xl md:text-6xl font-bold text-center mb-2">
                        Cosmetics
                    </h1>
                    <p className="text-[#F7F4ED] text-3xl md:text-4xl font-medium text-center">Shea Butter & Other</p>
                    <p className="text-[#F7F4ED] text-3xl md:text-4xl font-medium text-center">Shea Products</p>
                </div>

                {/* Pagination Dots */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
                    {heroImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/40'
                                }`}
                        />
                    ))}
                </div>

            </div>
        </>
    );
}
import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router';
import imgA from "../assets/images/megumi.jpg";
import imgB from "../assets/images/leighann.jpg";
import imgC from "../assets/images/aurelia.jpg";
import AOS from 'aos';
import "aos/dist/aos.css";

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

    useEffect(() => {
            AOS.init({
                duration: 700,
                once: true,
                offset: 80,
                easing: 'ease-out-quad',
            });
        }, []);
    
        // Ensure animations recalc when the route changes
        useEffect(() => {
            AOS.refreshHard();
        }, [location.pathname]);

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

                <div className='absolute inset-0 bg-black opacity-40'></div>

                {/* Overlay Content */}
                <div data-aos="zoom-in" className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-opacity-30">
                    <h1 className="text-[#8116b4] text-5xl md:text-6xl font-bold text-center">
                        Kanzoni
                    </h1>
                    <h1 className="text-[#8116b4] text-5xl md:text-6xl font-bold text-center mb-2">
                        Cosmetics
                    </h1>
                    <p style={{ fontFamily: "'Dancing Script', cursive" }} className="text-[#F7F4ED] text-4xl md:text-5xl font-bold text-center w-6/7 md:w-3/7">Pure Shea Butter & Natural Skincare Handcrafted in Ghana for Radiant, Healthy Skin</p>
                    {/* <p style={{ fontFamily: "'Dancing Script', cursive" }} className="text-[#F7F4ED] text-4xl md:text-5xl font-bold text-center">Shea Products</p> */}
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
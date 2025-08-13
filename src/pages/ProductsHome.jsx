// import { useEffect, useState } from "react";
import AlertBar from "../components/AlertBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import img1 from "../assets/images/istockphoto-A.jpg";
// import img2 from "../assets/images/kaeme-unsplash.jpg";
// import img3 from "../assets/images/istockphoto-B.jpg";
// import imgA from "../assets/images/megumi.jpg";
// import imgB from "../assets/images/leighann.jpg";
// import imgC from "../assets/images/aurelia.jpg";
import cropCream from "../assets/images/sincerely.jpg";
import cropLotion from "../assets/images/leighann-cream.jpg";
// import cropShowergel from "../assets/images/robbie.jpg";
// import cropSoap from "../assets/images/hygiene.jpg";
import { Link } from "react-router";
import ProductsCard from "../components/ProductsCard";
import products from "../data/products";
import ingredient1 from "../assets/images/deanna.jpg";
import HeroHomeSlider from "../components/HeroHomeSlider";
import BottomHomeSlider from "../components/BottomHomeSlider";
import ingredient2 from "../assets/images/raw-shea.jpg";
import ingredient3 from "../assets/images/palmkennel-oil.jpg";
import ingredient4 from "../assets/images/potash.jpg";
import ingredient5 from "../assets/images/essential-oil.jpg";

export default function ProductsHome() {

    return (
        <>
            <AlertBar />
            <Navbar />
            
            <section className="w-full h-screen relative overflow-hidden">
                <HeroHomeSlider />
            </section>

            <section className="w-full h-full">

                <div className="w-full h-full bg-white">

                    <div className="w-5/6 mt-12 flex flex-col items-center justify-center mx-auto">
                        <h2 className="flex justify-center text-3xl md:text-4xl font-bold mb-2 md:mb-4">Kanzoni</h2>
                        <h3 style={{ fontFamily: "'Dancing Script', cursive" }}
                            className="flex justify-center text-2xl md:text-4xl font-bold text-[#8116b4] italic">Represents Pure , Natural Beauty</h3>
                        <p className="text-justify md:text-center py-6 md:py-10 text-lg">At Kanzoni Cosmetics, we believe skincare should be as pure as nature itself. That’s why we craft our products using only organic ingredients like raw Shea butter, coconut oil, and essential oils — no harsh chemicals, no shortcuts. From Ghana’s rich Shea traditions to your home, our mission is simple: to nourish, protect, and celebrate your skin’s natural glow. Every jar, every bar, and every blend carries the care, integrity, and quality that define who we are.</p>

                        <span className="flex justify-center"><Link to="/about-us" className="border border-gray-400 px-5 py-2.5 rounded-lg shadow-lg mb-12 text-lg font-medium bg-[#8116b4] hover:bg-[#453979] text-[#F7F4ED]">Our Story</Link></span>
                    </div>

                    <div className="w-full h-full bg-[#F5F3FF]">
                        <div className="w-5/6 py-12 mx-auto">
                            <span>
                                <p className="text-center text-2xl md:text-3xl font-medium mb-6">Explore Our Natural Skincare Collection</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 ">
                                    {products.map((product) => (
                                        <ProductsCard
                                            key={product.id}
                                            id={product.id}
                                            name={product.name}
                                            nameTwo={product.nameTwo}
                                            price={product.price}
                                            image={product.image}
                                        />
                                    ))}
                                </div>
                            </span>
                            <span className="flex justify-center">
                                <Link to="/our-products">
                                    <button className="border border-gray-400 px-5 py-2.5 rounded-lg shadow-lg mt-10 text-lg font-medium bg-[#8116b4] hover:bg-[#453979] text-[#F7F4ED]">
                                        Our Products
                                    </button>
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>

            </section>

            <section 
                style={{
                    backgroundImage: `url(${cropCream})`,
                }}
                className="relative w-full h-full md:h-screen md:bg-fixed bg-cover bg-center">

                    <div className="absolute inset-0 bg-black opacity-20"></div>

                <div className="w-full h-screen flex items-center justify-center">
                    
                    <div className="text-center">
                        <p style={{ fontFamily: "'Dancing Script', cursive" }}
                            className="text-[#8116b4] text-4xl md:text-5xl font-bold tracking-wider md:tracking-normal italic">From Pure Shea Butter to Nourishing Body Care</p>

                        <Link to="/shopnow-products"><button className="bg-white text-black border border-gray-400 px-5 py-2.5 rounded-lg shadow-lg mt-12 font-medium hover:bg-[#8116b4] hover:text-[#F7F4ED] animate-bounce">Shop Now</button></Link>
                    </div>
                </div>
            </section>

            <section
                style={{
                    backgroundImage: `url(${cropLotion})`
                }}
                className="w-full h-screen md:bg-fixed bg-cover bg-right">
            </section>

            <section className="w-full h-screen">
                <BottomHomeSlider />
            </section>

            <section className="w-full h-full bg- flex items-center justify-center">

                <div className="my-10">
                    <h2 className="flex justify-center text-2xl md:text-3xl font-medium mb-8">Ingredients</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-10">
                        <div className="flex flex-col items-center justify-center text-center">
                            <img src={ingredient2} alt="" className="md:h-50 md:w-50 h-60 w-60 bg-gray-400 rounded-full" />
                            <p className="text-xl text-[#8116b4] font-medium mt-2">Raw Shea Butter</p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center">
                            <img src={ingredient1} alt="" className="md:h-50 md:w-50 h-60 w-60 bg-gray-400 rounded-full" />
                            <p className="text-xl text-[#8116b4] font-medium mt-2">Coconut Oil</p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center">
                            <img src={ingredient3} alt="" className="md:h-50 md:w-50 h-60 w-60 bg-gray-400 rounded-full" />
                            <p className="text-xl text-[#8116b4] font-medium mt-2">Palm Kernel Oil</p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center">
                            <img src={ingredient4} alt="" className="md:h-50 md:w-50 h-60 w-60 bg-gray-400 rounded-full" />
                            <p className="text-xl text-[#8116b4] font-medium mt-2">Potash</p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center">
                            <img src={ingredient5} alt="" className="md:h-50 md:w-50 h-60 w-60 bg-gray-400 rounded-full" />
                            <p className="text-xl text-[#8116b4] font-medium mt-2">Essential Oils</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
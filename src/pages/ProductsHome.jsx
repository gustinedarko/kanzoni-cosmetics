import { useEffect, useState } from "react";
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
import cropSoap from "../assets/images/hygiene.jpg";
import { Link } from "react-router";
import ProductsCard from "../components/ProductsCard";
import products from "../data/products";
import ingredient1 from "../assets/images/deanna.jpg";
import HeroHomeSlider from "../components/HeroHomeSlider";
import BottomHomeSlider from "../components/BottomHomeSlider";

export default function ProductsHome() {

    return (
        <>
            <AlertBar />
            <Navbar />

            
            <section className="w-full h-screen relative overflow-hidden">
                <HeroHomeSlider />
            </section>

            <section className="w-full h-full bg-[#F7F4ED] flex items-center justify-center">

                <div className="w-5/6 my-12">

                    <h2 className="flex justify-center text-3xl md:text-5xl font-bold mb-2 md:mb-4">Kanzoni</h2>
                    <h3 style={{ fontFamily: "'Dancing Script', cursive" }}
                        className="flex justify-center text-3xl md:text-5xl font-bold text-[#9C88FF] tracking-wider italic">Represents ......</h3>

                    <p className="text-center py-6 md:py-10 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, explicabo soluta. Id vel, fugit assumenda cupiditate quae saepe beatae totam velit voluptatem omnis impedit earum magnam iure accusantium tempora consectetur qui cumque praesentium maxime, enim, ab aliquam? Ducimus sequi facere voluptas praesentium quibusdam a quod eligendi pariatur reiciendis perspiciatis. Doloremque?</p>

                    <span className="flex justify-center"><Link to="/about-us" className="border border-gray-400 px-5 py-2.5 rounded-lg shadow-lg mb-12 text-lg font-medium bg-[#9C88FF] hover:bg-[#453979] text-[#F7F4ED]">Our Story</Link></span>

                    <span>
                        <p className="flex justify-center text-3xl font-medium mb-6">View our Products</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {products.map((product) => (
                                <ProductsCard
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    image={product.image}
                                />
                            ))}
                        </div>

                    </span>

                    <span className="flex justify-center">
                        <Link to="/our-products">
                            <button className="border border-gray-400 px-5 py-2.5 rounded-lg shadow-lg mt-10 text-lg font-medium bg-[#9C88FF] hover:bg-[#453979] text-[#F7F4ED]">
                                Our Products
                            </button>
                        </Link>
                    </span>
                </div>

            </section>

            <section
                style={{
                    backgroundImage: `url(${cropCream})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                }}
                className="w-full h-full md:h-screen">
                <div className="w-full h-screen flex items-center justify-center">
                    <div className="text-center">
                        <p style={{ fontFamily: "'Dancing Script', cursive" }}
                            className="text-[#5C4D9A] text-6xl font-bold tracking-wider italic">Shea butter and All other products</p>

                        <Link to="/shopnow-products"><button className="bg-white text-black border border-gray-400 px-5 py-2.5 rounded-lg shadow-lg mt-12 font-medium hover:bg-[#453979] hover:text-[#F7F4ED]">Shop Now</button></Link>
                    </div>
                </div>
            </section>

            <section
                style={{
                    backgroundImage: `url(${cropLotion})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',
                    backgroundAttachment: 'fixed',
                }}
                className="w-full h-screen">
            </section>

            <section className="w-full h-screen">
                <BottomHomeSlider />
            </section>

            <section className="w-full h-full bg-[#F7F4ED] flex items-center justify-center">

                <div className="my-10">
                    <h2 className="flex justify-center text-4xl font-medium mb-8">Ingredients</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                        <div className="flex flex-col items-center justify-center text-center">
                            <img src={ingredient1} alt="" className="h-60 w-60 bg-gray-400 rounded-full" />
                            <p className="text-xl font-medium mt-2">Coconut Oil</p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center">
                            <img src={ingredient1} alt="" className="h-60 w-60 bg-gray-400 rounded-full" />
                            <p className="text-xl font-medium mt-2">Coconut Oil</p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center">
                            <img src={ingredient1} alt="" className="h-60 w-60 bg-gray-400 rounded-full" />
                            <p className="text-xl font-medium mt-2">Coconut Oil</p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center">
                            <img src={ingredient1} alt="" className="h-60 w-60 bg-gray-400 rounded-full" />
                            <p className="text-xl font-medium mt-2">Coconut Oil</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
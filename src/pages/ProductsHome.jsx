import { useEffect, useState } from "react";
import AlertBar from "../components/AlertBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import img1 from "../assets/images/istockphoto-A.jpg";
// import img2 from "../assets/images/kaeme-unsplash.jpg";
// import img3 from "../assets/images/istockphoto-B.jpg";
import imgA from "../assets/images/megumi.jpg";
import imgB from "../assets/images/leighann.jpg";
import imgC from "../assets/images/aurelia.jpg";
import cropCream from "../assets/images/sincerely.jpg";
import cropLotion from "../assets/images/leighann-cream.jpg";
// import cropShowergel from "../assets/images/robbie.jpg";
import cropSoap from "../assets/images/hygiene.jpg";
import { Link } from "react-router";
import ProductsCard from "../components/ProductsCard";
import products from "../data/products";
import ingredient1 from "../assets/images/deanna.jpg"


const images = [imgA, imgB, imgC];

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
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30"></div>

                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-opacity-30">
                    <h1 className="text-[#5C4D9A] text-5xl md:text-6xl font-bold text-center">
                        Kanzoni
                    </h1>
                    <h1 className="text-[#5C4D9A] text-5xl md:text-6xl font-bold text-center">
                        Cosmetics
                    </h1>
                    <p className="text-[#F7F4ED] text-2xl md:text-4xl font-bold text-center">Shea Butter & Other</p>
                    <p className="text-[#F7F4ED] text-2xl md:text-4xl font-bold text-center">Shea Products</p>
                    {/* <button className="text-[#F7F4ED] font-medium border border-gray-400 px-5 py-2.5 rounded-lg shadow-lg mt-10 text-lg bg- hover:bg-[#9C88FF]">Our Products</button> */}
                </div>
            </section>

            <section className="w-full h-full bg-[#F7F4ED] flex items-center justify-center">

                <div className="w-5/6 my-12">

                    <h2 className="flex justify-center text-5xl font-bold mb-4">Kanzoni</h2>
                    <h3 style={{ fontFamily: "'Dancing Script', cursive" }}
                        className="flex justify-center text-5xl font-bold text-[#9C88FF] tracking-wider italic">Represents ......</h3>

                    <p className="text-center py-10 px-12 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, explicabo soluta. Id vel, fugit assumenda cupiditate quae saepe beatae totam velit voluptatem omnis impedit earum magnam iure accusantium tempora consectetur qui cumque praesentium maxime, enim, ab aliquam? Ducimus sequi facere voluptas praesentium quibusdam a quod eligendi pariatur reiciendis perspiciatis. Doloremque?</p>

                    <span className="flex justify-center"><Link to="/about-us" className="border border-gray-400 px-5 py-2.5 rounded-lg shadow-lg mb-12 text-lg font-medium bg-[#9C88FF] hover:bg-[#453979] text-[#F7F4ED]">Our story</Link></span>

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

                    <span className="flex justify-center"><button className="border border-gray-400 px-5 py-2.5 rounded-lg shadow-lg mt-10 text-lg font-medium bg-[#9C88FF] hover:bg-[#453979] text-[#F7F4ED]">Our Products</button></span>
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
                            className="text-[#5C4D9A] text-6xl font-bold tracking-wider italic">Shea butter</p>

                        <Link to="/products/cream"><button className="bg-white text-black border border-gray-400 px-5 py-2.5 rounded-lg shadow-lg mt-12 font-medium hover:bg-[#453979] hover:text-[#F7F4ED]">Shop Now</button></Link>
                    </div>
                </div>
            </section>

            {/* <section
                style={{
                    backgroundImage: `url(${cropShowergel})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                }}
                className="w-full h-full md:h-screen">
                <div className="w-full h-screen flex items-start justify-center pt-[90%] sm:pt-[70%] md:pt-[40%] lg:pt-[35%]">
                    <button className="bg-white text-black px-6 py-3 rounded shadow-lg">Shop Now</button>
                </div>
            </section> */}

            <section
                style={{
                    backgroundImage: `url(${cropLotion})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',
                    backgroundAttachment: 'fixed',
                }}
                className="w-full h-full md:h-screen">
                <div className="w-full h-screen flex items-center justify-center">
                    <div className="text-center">
                        <p style={{ fontFamily: "'Dancing Script', cursive" }}
                            className="text-[#5C4D9A] text-6xl font-bold tracking-wider italic">Body Lotion</p>

                        <Link to="/products/lotion"><button className="bg-white text-black border border-gray-400 px-5 py-2.5 rounded-lg shadow-lg mt-12 font-medium hover:bg-[#453979] hover:text-[#F7F4ED]">Shop Now</button></Link>
                    </div>
                </div>
            </section>

            <section
                style={{
                    backgroundImage: `url(${cropSoap})`,
                    backgroundSize: 'cover',
                    backgroundPosition: '',
                    backgroundAttachment: 'fixed',
                }}
                className="w-full h-full md:h-screen">
                <div className="w-full h-screen flex items-center justify-center">
                    <div className="text-center">
                        <p style={{ fontFamily: "'Dancing Script', cursive" }}
                            className="text-[#5C4D9A] text-6xl font-bold tracking-wider italic">Shower Gel & Soap</p>

                        <Link to="/products/combo"><button className="bg-white text-black border border-gray-400 px-5 py-2.5 rounded-lg shadow-lg mt-12 font-medium hover:bg-[#453979] hover:text-[#F7F4ED]">Shop Now</button></Link>
                    </div>
                </div>
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
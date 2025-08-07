import products from "../data/products";
import AlertBar from "../components/AlertBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";
import { FaChevronLeft } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useState } from "react";


export default function ShopNowProducts() {

    const navigate = useNavigate();

    const { addToCart } = useCart();
    const [quantities, setQuantities] = useState({});


    return (
        <>
            <AlertBar />
            <Navbar />
            <button
                onClick={() => navigate(-1)}
                className="ml-10 mt-6 px-1.5 py-1.5 text-white rounded font-medium bg-[#9C88FF] hover:bg-[#453979] transition"
            >
                <span className="flex items-center space-x-1">
                    <span><FaChevronLeft /></span>
                    <span>Back</span>
                </span>
            </button>

            <section className="px-6 md:px-10 p-6 md:pb-10 md:w-5/6 mx-auto">
                <h1 className="text-3xl font-semibold text-center mb-10">Shop Now</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-64 object-cover rounded"
                            />
                            <h2 className="text-2xl font-semibold mt-4 text-center">{product.name}</h2>
                            <p className="mt-2 text-center">{product.description}</p>
                            <p className="text-lg mt-2 font-medium text-[#5C4D9A] text-center">Gh₵ {product.price}</p>

                            <div className="mt-4 flex items-center justify-center space-x-3">
                                <input
                                    type="number"
                                    min="1"
                                    value={quantities[product.id] || 1}
                                    onChange={(e) =>
                                        setQuantities({ ...quantities, [product.id]: parseInt(e.target.value) })
                                    }
                                    className="w-16 h-10 border border-gray-400 rounded px-2 text-center"
                                />
                                <button
                                    onClick={() => addToCart(product, quantities[product.id] || 1)}
                                    className="bg-[#9C88FF] hover:bg-[#453979] text-white font-medium px-4 py-2 rounded">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
}
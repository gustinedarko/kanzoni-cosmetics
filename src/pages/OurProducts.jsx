import products from "../data/products";
import AlertBar from "../components/AlertBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router";

export default function OurProducts() {

    const navigate = useNavigate();

    return (
        <>
            <section className="bg-[#F5F3FF]">
                <AlertBar />
                <Navbar />
                <div className="w-full flex items-center justify-between">
                    <button
                        onClick={() => navigate(-1)}
                        className="ml-6 md:ml-10 mt-6 px-1.5 py-1.5 text-white rounded font-medium bg-[#9C88FF] hover:bg-[#453979] transition text-sm md:text-base"
                    >
                        <span className="flex items-center space-x-1">
                            <span><FaChevronLeft /></span>
                            <span>Back</span>
                        </span>
                    </button>
                    <Link to="/shopnow-products" className="text-[#8116b4] mr-6 md:mr-10 mt-6 underline hover:font-medium hover:text-[#453979] animate-bounce text-sm md:text-base">Shop Now</Link>
                </div>

                <div className="px-6 md:px-10 pt-4 pb-8 md:pb-12 md:w-5/6 mx-auto">
                    <h1 className="text-2xl md:text-3xl font-semibold text-center mb-4 md:mb-8">Our Products</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {products.map((product) => (
                            <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-64 object-cover rounded"
                                />
                                <h2 className="text-2xl font-semibold mt-4 text-center">{product.nameTwo}</h2>
                                <p className="text-lg mt-2 font-medium text-[#5C4D9A] text-center">Gh₵ {product.price}</p>
                                <p className="mt-2 text-justify md:text-center text-gray-600">{product.descriptionTwo}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
            </section>
        </>
    )
}
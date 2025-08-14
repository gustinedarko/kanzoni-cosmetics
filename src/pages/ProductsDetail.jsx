import { useParams, useNavigate } from "react-router";
import products from "../data/products";
import AlertBar from "../components/AlertBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router";

export default function ProductsDetail() {
    const { id } = useParams();
    const product = products.find((p) => p.id === id);

    if (!product) return <p>Product not found.</p>;

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

                <div className="p-10 w-full">
                    <div className="bg-[#F7F4ED] p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
                        <img src={product.image} alt={product.name} className="w-full max-w-md mx-auto object-cover rounded" />
                        <h2 className="text-2xl md:text-3xl font-bold text-center mt-6">{product.nameTwo}</h2>
                        <p className="mt-2 text-center text-gray-600">{product.description}</p>
                        <p className="mt-2 text-center text-lg font-medium text-[#5C4D9A]">Gh₵ {product.price}</p>

                        {/* <Link to="/shopnow-products">
                            <button className="bg-[#8116b4] text-[#F7F4ED] w-full border border-gray-400 px-5 py-2.5 rounded-lg shadow-lg mt-2 font-medium hover:bg-[#453979] block mx-auto">
                                Shop Now
                            </button>
                        </Link> */}
                    </div>
                </div>
                <Footer />
            </section>
        </>
    );
}

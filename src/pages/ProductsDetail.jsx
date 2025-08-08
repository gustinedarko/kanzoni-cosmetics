import { useParams, useNavigate } from "react-router";
import products from "../data/products";
import AlertBar from "../components/AlertBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaChevronLeft } from "react-icons/fa";

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
                <button
                    onClick={() => navigate(-1)}
                    className="ml-10 mt-6 px-1.5 py-1.5 text-white rounded font-medium bg-[#9C88FF] hover:bg-[#453979] transition"
                >
                    <span className="flex items-center space-x-1">
                        <span><FaChevronLeft /></span>
                        <span>Back</span>
                    </span>
                </button>
                <div className="p-10">
                    <div className="bg-[#F7F4ED] p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
                        <img src={product.image} alt={product.name} className="w-full max-w-md mx-auto object-cover rounded" />
                        <h2 className="text-3xl font-bold text-center mt-6">{product.name}</h2>
                        <p className="mt-2 text-center">{product.description}</p>
                        <p className="mt-2 text-center text-lg font-medium text-[#5C4D9A]">Gh₵ {product.price}</p>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    );
}

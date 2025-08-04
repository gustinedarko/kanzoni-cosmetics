import { useParams, useNavigate } from "react-router";
import products from "../data/products";
import AlertBar from "../components/AlertBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProductsDetail() {
    const { id } = useParams();
    const product = products.find((p) => p.id === id);

    if (!product) return <p>Product not found.</p>;

    const navigate = useNavigate();

    return (
        <>
            <AlertBar />
            <Navbar />
            <button
                onClick={() => navigate(-1)}
                className="ml-10 mt-6 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
            >
                ← Back
            </button>
            <div className="p-10">
                <img src={product.image} alt={product.name} className="w-full max-w-md mx-auto object-cover rounded" />
                <h2 className="text-3xl font-bold text-center mt-6">{product.name}</h2>
                <p className="mt-2 text-center text-lg font-medium text-[#5C4D9A]">Ghc {product.price}</p>
                <p className="mt-4 text-center">{product.description}</p>
            </div>
            <Footer />
        </>
    );
}

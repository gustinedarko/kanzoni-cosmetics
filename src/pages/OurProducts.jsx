import products from "../data/products";
import AlertBar from "../components/AlertBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";

export default function OurProducts() {

    const navigate = useNavigate();

    return (
        <>
        <AlertBar />
        <Navbar />
        <button
                onClick={() => navigate(-1)}
                className="ml-10 mt-6 px-4 py-2 text-white rounded font-medium bg-[#9C88FF] hover:bg-[#453979] transition"
            >
                ← Back
            </button>

            <section className="px-6 md:px-10 pb-6 md:pb-10">
                <h1 className="text-3xl font-semibold text-center mb-10">Our Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-64 object-cover rounded"
                            />
                            <h2 className="text-2xl font-semibold mt-4">{product.name}</h2>
                            <p className="text-lg mt-2 font-medium text-[#5C4D9A]">Gh₵ {product.price}</p>
                            <p className="mt-2">{product.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        <Footer />
        </>
    )
}
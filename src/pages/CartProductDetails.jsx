import { useParams } from "react-router";
import products from "../data/products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AlertBar from "../components/AlertBar";
import Button from "../components/Button";
import NavButton from "../components/NavButton";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { Link } from "react-router";

export default function CartProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <p className="text-center mt-10">Product not found.</p>;
  }

  return (
    <section className="bg-[#F5F3FF] min-h-screen">
      <AlertBar />
      <Navbar />


      <div className="w-full flex items-center justify-between">

        <NavButton goBack label="Back" />

        {/* <button onClick={() => navigate(-1)} className="ml-10 mt-6 px-1.5 py-1.5 text-white rounded font-medium bg-[#9C88FF] hover:bg-[#453979] transition text-sm md:text-base">
          <span className="flex items-center space-x-1">
            <span><FaChevronLeft /></span>
            <span>Back</span>
          </span>
        </button> */}
        <Link to="/shopnow-products" className="text-[#8116b4] mr-6 md:mr-10 mt-6 underline hover:font-medium hover:text-[#453979] animate-bounce text-sm md:text-base">Shop Now</Link>
      </div>


      <div className="px-6 md:px-16 py-10 md:w-5/6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[450px] object-cover rounded-lg shadow-md"
          />

          {/* Right: Product Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold">{product.nameTwo}</h1>
              <p className="text-lg mt-2 font-medium text-[#5C4D9A]">Gh₵ {product.price}</p>
            </div>

            {/* Descriptions */}
            <div className="my-4 md:my-0">
              <h2 className="text-xl font-semibold">Product Details</h2>
              <p className="mt-3 text-gray-700 text-justify">{product.description}</p>
              <p className="mt-2 text-gray-700 text-justify">{product.descriptionTwo}</p>
            </div>

            <div className="mt-6 flex items-center space-x-3">
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value === "" ? "" : parseInt(e.target.value))}
                className="w-20 h-10 border border-gray-400 rounded px-2 text-center"
              />

              <Button onClick={() => addToCart(product, quantity || 1)} variant="primary">
                Add to Cart
              </Button>

              {/* <button
                onClick={() => addToCart(product, quantity || 1)}
                className="bg-[#8116b4] hover:bg-[#453979] text-white font-medium px-6 py-2 rounded">
                Add to Cart
              </button> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

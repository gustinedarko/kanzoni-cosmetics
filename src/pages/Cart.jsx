import { useCart } from "../context/CartContext";
import { Link } from "react-router";
import AlertBar from "../components/AlertBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaChevronLeft } from "react-icons/fa";
import { useState } from "react";

export default function Cart() {
    const { cartItems, removeFromCart, clearCart, updateCartItemQuantity } = useCart();

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleQuantityChange = (id, newQuantity) => {
        const parsedQuantity = parseInt(newQuantity);
        if (!isNaN(parsedQuantity) && parsedQuantity > 0) {
            updateCartItemQuantity(id, parsedQuantity);
        }
    };

    return (
        <section className="bg-[#F5F3FF]">
            <AlertBar />
            <Navbar />
            <Link to="/shopnow-products">
                <button
                    // onClick={() => navigate(-1)}
                    className="ml-10 mt-6 px-1.5 py-1.5 text-white rounded font-medium bg-[#9C88FF] hover:bg-[#453979] transition"
                >
                    <span className="flex items-center space-x-1">
                        <span><FaChevronLeft /></span>
                        <span>Shop</span>
                    </span>
                </button>
            </Link>
            <div className="px-6 py-3 md:w-5/6 mx-auto">
                <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Your Cart</h1>
                {cartItems.length === 0 ? (
                    <div className="text-center">
                        <p className="mb-4">Your cart is empty.</p>
                        <Link to="/shopnow-products" className="text-[#9C88FF] underline">Go shopping</Link>
                    </div>
                ) : (
                    <>
                    <hr className="text-gray-400"/>
                        <div className="space-y-4">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex justify-between items-center border-b border-gray-400 pb-4">
                                    <div>
                                        <h2 className="text-xl font-semibold align-items-center">{item.name}</h2>
                                        <div className="flex gap-6 mt-3">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-24 h-24 object-cover rounded"
                                            />
                                            <div className="flex flex-col justify-around">
                                                <p>Price: Gh₵ {item.price * item.quantity}</p>
                                                <label className="flex items-center gap-2 font">
                                                    Qty:
                                                    <input
                                                        type="number"
                                                        min="1"
                                                        value={item.quantity}
                                                        onChange={e => handleQuantityChange(item.id, e.target.value)}
                                                        className="w-16 border rounded px-2 py-1"
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-600 hover:underline"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 text-right">
                            <p className="text-xl font-bold">Total: Gh₵ {total}</p>
                            <button
                                onClick={clearCart}
                                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                            >
                                Clear Cart
                            </button>
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </section>
    );
}
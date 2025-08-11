import { useCart } from "../context/CartContext";
import { Link } from "react-router";
import AlertBar from "../components/AlertBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Cart() {
    const { cartItems, removeFromCart, clearCart, updateCartItemQuantity } = useCart();

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleQuantityChange = (id, newQuantity) => {
        const parsedQuantity = parseInt(newQuantity);
        if (!isNaN(parsedQuantity) && parsedQuantity > 0) {
            updateCartItemQuantity(id, parsedQuantity);
        }
    };

    // NEW: Checkout form state
    const [buyer, setBuyer] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    // NEW: Handle checkout form submission
    const handleCheckout = (e) => {
        e.preventDefault();

        const orderDetails = cartItems
            .map(item => `${item.name} (x${item.quantity}) - Gh₵ ${item.price * item.quantity}`)
            .join("\n");

        const templateParams = {
            buyer_name: buyer.name,
            buyer_email: buyer.email,
            buyer_phone: buyer.phone,
            buyer_address: buyer.address,
            order_list: orderDetails,
            order_total: `Gh₵ ${total}`,
        };

        // Replace with your EmailJS service, template, and public key
        emailjs.send("service_vryiqos", "template_z4w6lg7", templateParams, "4VorpMdP2j_3nH7kp")
            .then(() => {
                alert("Order sent successfully!");
                clearCart();
                setBuyer({ name: "", email: "", phone: "", address: "" });
            })
            .catch(() => {
                alert("Failed to send order. Please try again.");
            });
    };

    return (
        <>
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
            
            <div className="">
                <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Your Cart</h1>
                {cartItems.length === 0 ? (
                    <div className="text-center">
                        <p className="mb-4">Your cart is empty.</p>
                        <Link to="/shopnow-products" className="text-[#9C88FF] underline">Go shopping</Link>
                    </div>
                ) : (
                    <>
                        <section className="px-6 md:w-5/6 mx-auto">
                            <hr className="text-gray-400" />
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
                        </section>

                        <section className="bg-[#F5F3FF]">
                            {/* 📌 NEW: Checkout Form */}
                            <div className="mt-10 px-6 pb-8 md:w-5/6 mx-auto flex md:justify-end">
                                <div className="mt-10 bg-white p-6 rounded shadow-md md:w-6/11">
                                    <h2 className="text-lg font-semibold mb-4">Fill in you details to place your order (Checkout)</h2>
                                    <form onSubmit={handleCheckout} className="space-y-4">
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            value={buyer.name}
                                            onChange={(e) => setBuyer({ ...buyer, name: e.target.value })}
                                            className="w-full border p-2 rounded"
                                            required
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            value={buyer.email}
                                            onChange={(e) => setBuyer({ ...buyer, email: e.target.value })}
                                            className="w-full border p-2 rounded"
                                            required
                                        />
                                        <input
                                            type="tel"
                                            placeholder="Phone"
                                            value={buyer.phone}
                                            onChange={(e) => setBuyer({ ...buyer, phone: e.target.value })}
                                            className="w-full border p-2 rounded"
                                            required
                                        />
                                        <textarea
                                            placeholder="Address"
                                            value={buyer.address}
                                            onChange={(e) => setBuyer({ ...buyer, address: e.target.value })}
                                            className="w-full border p-2 rounded"
                                            required
                                        ></textarea>
                                        <button
                                            type="submit"
                                            className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
                                        >
                                            Place Order
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </>
                )}
            </div>
            <Footer />
        </>
    );
}
import AlertBar from "../components/AlertBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

export default function Contact() {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState({ show: false, message: "", type: "" });
    const formRef = useRef(null);
    useEffect(() => {
        if (notification.show) {
            const timer = setTimeout(() => {
                setNotification({ show: false, message: "", type: "" });
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [notification.show]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = formRef.current;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/mnnzglbl", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setNotification({ show: true, message: "Message sent successfully!", type: "success" });
                form.reset();
            } else {
                setNotification({ show: true, message: "Something went wrong. Please try again.", type: "error" });

                setTimeout(() => {
                    setNotification({ show: false, message: "", type: "" });
                }, 3000);
            }
        } catch (error) {
            setNotification({ show: true, message: "Failed to send message. Check your connection.", type: "error" });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <AlertBar />
            <Navbar />
            <div className="bg-white text-gray-800">
                {/* Why Choose Us */}
                <section className="py-16 px-6 text-center bg-[#F5F3FF]">
                    <div data-aos="zoom-in">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#8116b4]">Get in Touch with Kanzoni Cosmetics</h2>
                        <p className="max-w-2xl mx-auto text-lg">
                            At Kanzoni Cosmetics, we blend Ghanaian tradition with pure, natural skincare you can trust. Whether you have a question, need product guidance, or want to place an order, our team is here for you. Your journey to healthy, radiant skin starts with a conversation — let’s connect today.
                        </p>
                    </div>
                </section>

                {/* Contact Options */}
                <section className="py-16 px-6 max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-[#FAF9FF] rounded-xl p-6 shadow">
                        <FaPhoneAlt size={24} className="text-[#5C4D9A] mb-2" />
                        <h4 className="font-bold mb-1">Call Us</h4>
                        <a href="tel:+233501234567" className="hover:text-[#9C88FF] transition">+233 54 195 8490</a>
                    </div>

                    <div className="bg-[#FAF9FF] rounded-xl p-6 shadow">
                        <FaWhatsapp size={24} className="text-[#25D366] mb-2" />
                        <h4 className="font-bold mb-1">Chat on WhatsApp</h4>
                        <a href="https://wa.me/233541958490" target="_blank"
                            rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            Chat on WhatsApp
                        </a>
                    </div>

                    <div className="bg-[#FAF9FF] rounded-xl p-6 shadow">
                        <FaEnvelope size={24} className="text-[#EA4335] mb-2" />
                        <h4 className="font-bold mb-1">Email Us</h4>
                        <a href="mailto:kanzonicosmetics@gmail.com" className="hover:text-[#9C88FF] transition">kanzoni.cosmetics@gmail.com</a>
                    </div>

                    <div className="bg-[#FAF9FF] rounded-xl p-6 shadow">
                        <FaMapMarkerAlt size={24} className="text-[#4285F4] mb-2" />
                        <h4 className="font-bold mb-1">Visit Our Location</h4>
                        <p>Tamale, Ghana</p>
                    </div>

                    <div className="bg-[#FAF9FF] rounded-xl p-6 shadow">
                        <FaClock size={24} className="text-[#FF9900] mb-2" />
                        <h4 className="font-bold mb-1">Working Hours</h4>
                        <p>Mon - Fri: 9am – 5pm</p>
                        <p>Sat: 10am – 2pm</p>
                    </div>

                    <div className="bg-[#FAF9FF] rounded-xl p-6 shadow">
                        <h4 className="font-bold mb-2">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-[#3b5998] hover:text-[#5C4D9A]"><FaFacebookF size={20} /></a>
                            <a href="#" className="text-[#1DA1F2] hover:text-[#5C4D9A]"><FaLinkedin size={20} /></a>
                            <a href="#" className="text-[#E1306C] hover:text-[#5C4D9A]"><FaInstagram size={20} /></a>
                        </div>
                    </div>
                </section>

                {/* Contact Form */}
                <section className="py-16 px-6 bg-[#F5F3FF]">
                    <h3 className="text-2xl font-bold text-center mb-8 text-[#8116b4]">Send Us a Message</h3>
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="max-w-3xl mx-auto space-y-6">
                        {notification.show && (
                            <div
                                className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-md shadow-md text-white font-medium transition duration-300
                                ${notification.type === "success" ? "bg-green-400" : "bg-red-500"}`}
                            >
                                {notification.message}
                            </div>
                        )}
                        <div className="flex flex-col md:flex-row gap-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9C88FF]"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9C88FF]"
                                required
                            />
                        </div>

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="5"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9C88FF]"
                            required
                        ></textarea>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`${isSubmitting ? "bg-[#7a6bb7] cursor-not-allowed" : "bg-[#8116b4] hover:bg-[#453979]"
                                } text-white px-5 py-2.5 font-medium rounded-md transition duration-200`}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </section>

                {/* Newsletter Subscription */}
                {/* <section className="py-16 px-6 text-center">
                    <h4 className="text-xl font-bold mb-4 text-[#5C4D9A]">Subscribe to Our Newsletter</h4>
                    <p className="mb-4">Be the first to hear about promotions, new products, and updates.</p>
                    <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#9C88FF]"
                        />
                        <button
                            type="submit"
                            className="bg-[#5C4D9A] text-white px-6 py-3 rounded-md hover:bg-[#453979]"
                        >
                            Subscribe
                        </button>
                    </form>
                </section> */}

                {/* Optional: Embedded Google Map */}
                {/* Remove if not needed */}
                <section className="px-6 pb-16 bg-[#F5F3FF]">
                    <iframe
                        title="Kanzoni Cosmetics Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31691.000000000!2d-0.205!3d5.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2z5YyX5Lqs5aSn!5e0!3m2!1sen!2sgh!4v0000000000000"
                        width="100%"
                        height="300"
                        allowFullScreen=""
                        loading="lazy"
                        className="rounded-md border-2 border-[#E5E5E5]"
                    ></iframe>
                </section>
            </div>
            <Footer />
        </>
    );
}
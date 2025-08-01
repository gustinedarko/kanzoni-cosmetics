import AlertBar from "../components/AlertBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
        <>
        <AlertBar />
        <Navbar />
            <div className="bg-white text-gray-800">
                {/* Why Choose Us */}
                <section className="py-16 px-6 text-center bg-[#F5F3FF]">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#5C4D9A]">Why Choose Kanzoni Cosmetics?</h2>
                    <p className="max-w-2xl mx-auto text-lg">
                        At Kanzoni Cosmetics, we pride ourselves on crafting pure, natural skincare products rooted in Ghanaian tradition. With a commitment to quality, sustainability, and customer satisfaction, we’re here to help you glow—inside and out.
                    </p>
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
                    <h3 className="text-2xl font-bold text-center mb-8 text-[#5C4D9A]">Send Us a Message</h3>
                    <form className="max-w-3xl mx-auto space-y-6">
                        <div className="flex flex-col md:flex-row gap-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9C88FF]"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9C88FF]"
                                required
                            />
                        </div>
                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9C88FF]"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-[#5C4D9A] text-white px-6 py-3 rounded-md hover:bg-[#453979] transition duration-200"
                        >
                            Send Message
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
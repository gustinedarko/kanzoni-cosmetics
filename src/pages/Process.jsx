import AlertBar from "../components/AlertBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GiFire, GiBoilingBubbles, GiCauldron, GiCoconuts, GiSpinningBlades } from "react-icons/gi";
import { FaSeedling, FaRegSnowflake, FaHandHoldingWater } from "react-icons/fa";
import imgCommunity from "../assets/images/annie-spratt-2.jpg";
import imgProductSoap from "../assets/images/black-soap-product.jpeg";

export default function Process() {
    const steps = [
        {
            icon: <FaSeedling size={40} className="text-[#9C88FF]" />,
            title: "Harvesting",
            text: "Shea fruits are collected by hand after they fall naturally from the trees."
        },
        {
            icon: <GiBoilingBubbles size={40} className="text-[#9C88FF]" />,
            title: "Boiling & Drying",
            text: "The nuts are boiled to reduce moisture and then sun-dried to preserve them."
        },
        {
            icon: <GiCoconuts size={40} className="text-[#9C88FF]" />,
            title: "Cracking",
            text: "The dried nuts are cracked to access the kernel inside."
        },
        {
            icon: <GiFire size={40} className="text-[#9C88FF]" />,
            title: "Roasting",
            text: "The kernels are roasted to enhance quality and release their oils."
        },
        {
            icon: <GiSpinningBlades size={40} className="text-[#9C88FF]" />,
            title: "Grinding",
            text: "Roasted kernels are ground into a thick, rich paste."
        },
        {
            icon: <FaHandHoldingWater size={40} className="text-[#9C88FF]" />,
            title: "Kneading",
            text: "The paste is mixed with water and kneaded by hand to extract the oils."
        },
        {
            icon: <GiCauldron size={40} className="text-[#9C88FF]" />,
            title: "Boiling & Skimming",
            text: "The separated fat is boiled to purify it, then skimmed off."
        },
        {
            icon: <FaRegSnowflake size={40} className="text-[#9C88FF]" />,
            title: "Cooling & Packaging",
            text: "The liquid shea butter cools and solidifies, ready for packaging."
        },
    ];

    return (
        <>
            <AlertBar />
            <Navbar />
            <section className="w-full h-full bg-[#F7F4ED] flex items-center justify-center">
                <div className="w-5/6 my-12">
                    <h2 className="flex justify-center text-3xl md:text-5xl font-bold text-center">Experience the Craft of Shea Butter Making in Ghana</h2>
                    <h3 className="flex justify-center text-xl md:text-2xl text-center mt-4">A step-by-step journey through tradition and care</h3>
                    <p className="text-center py-10 px-6 text-lg max-w-4xl mx-auto">
                        Shea butter is more than a cosmetic ingredient, it's a legacy passed down through generations in Ghana.
                        At Kanzoni Cosmetics, we honor this heritage with an artisanal approach to production. Each step in the process is
                        infused with care, precision, and respect for both the women behind the craft and the environment.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
                        {steps.map((step, index) => (
                            <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
                                <div className="mb-4 flex justify-center">{step.icon}</div>
                                <h4 className="text-xl font-semibold text-[#9C88FF] mb-2">{step.title}</h4>
                                <p className="text-gray-700 text-base">{step.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <h4 className="text-2xl font-semibold text-[#9C88FF] mb-4">Did You Know?</h4>
                        <p className="text-lg px-6 md:px-20 text-gray-700">
                            Shea butter is rich in vitamins A and E and contains essential fatty acids that deeply moisturize the skin. Its production supports local
                            economies, empowers women in rural communities, and preserves an age-old craft passed down through generations.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white py-12 px-4 sm:px-8 lg:px-16">
                <h2 className="text-3xl text-center font-semibold text-[#9C88FF] mb-10">
                    From Tradition to Transformation: Our Natural Products
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Product 1 - Shea Butter */}
                    <div className="bg-amber-50 p-4 rounded-lg shadow-md text-center">
                        <img
                            src={imgProductSoap}
                            alt="Raw Shea Butter"
                            className="w-full h-40 object-cover rounded"
                        />
                        <h3 className="text-xl font-medium mt-4">Raw Shea Butter</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            Pure, hand-processed shea butter packed with natural nutrients. Ideal for skin and hair hydration.
                        </p>
                    </div>

                    {/* Product 2 - Shea Butter Lotion */}
                    <div className="bg-amber-50 p-4 rounded-lg shadow-md text-center">
                        <img
                            src="/images/shea-lotion.jpg"
                            alt="Shea Butter Lotion"
                            className="w-full h-40 object-cover rounded"
                        />
                        <h3 className="text-xl font-medium mt-4">Shea Butter Lotion</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            A creamy blend of shea butter and essential oils that softens and nourishes dry skin naturally.
                        </p>
                    </div>

                    {/* Product 3 - Alata Shower Gel */}
                    <div className="bg-amber-50 p-4 rounded-lg shadow-md text-center">
                        <img
                            src="/images/alata-shower-gel.jpg"
                            alt="Alata Shower Gel"
                            className="w-full h-40 object-cover rounded"
                        />
                        <h3 className="text-xl font-medium mt-4">Alata Shower Gel</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            Liquid black soap enriched with shea and herbal extracts, perfect for daily skin cleansing.
                        </p>
                    </div>

                    {/* Product 4 - Alata Black Soap */}
                    <div className="bg-amber-50 p-4 rounded-lg shadow-md text-center">
                        <img
                            src="/images/alata-black-soap.jpg"
                            alt="Alata Black Soap"
                            className="w-full h-40 object-cover rounded"
                        />
                        <h3 className="text-xl font-medium mt-4">Alata Black Soap</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            Traditional Ghanaian soap made from plantain peels and cocoa pods — gentle, natural, and effective.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-[#F7F4ED] py-12 px-4 sm:px-8 lg:px-16">
                <h2 className="text-3xl text-center font-semibold text-[#9C88FF] mb-6">
                    Traditional Tools & Community Impact
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Image Placeholder */}
                    <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                        {/* Replace with actual image */}
                        <img
                            src={imgCommunity}
                            alt="Traditional tools used in shea butter production"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="text-lg text-gray-700 space-y-4">
                        <p>
                            Shea butter production in Ghana often uses traditional tools like grinding stones,
                            wooden paddles, and large metal bowls. These tools, passed down through generations,
                            are still used today, especially in rural cooperatives.
                        </p>
                        <p>
                            Many women come together in groups to hand-process shea nuts. This not only helps
                            preserve indigenous techniques but also supports economic empowerment within
                            communities, creating jobs, income, and unity.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
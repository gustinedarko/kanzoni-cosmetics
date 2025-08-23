import AlertBar from "../components/AlertBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GiFire, GiBoilingBubbles, GiCauldron, GiCoconuts, GiSpinningBlades } from "react-icons/gi";
import { FaSeedling, FaRegSnowflake, FaHandHoldingWater } from "react-icons/fa";
// import imgCommunity from "../assets/images/annie-spratt-1.jpg";
import imgCommunity from "../assets/images/production.jpg";
// import imgProductSoap from "../assets/images/black-soap-product.jpeg";
import img1 from "../assets/images/kc-raw-sheabutter.jpeg";
import img2 from "../assets/images/kc-raw-soap.jpeg";
import img3 from "../assets/images/kc-lotion.jpeg";
import img4 from "../assets/images/kc-mixed-sheabutter.jpeg";
import img5 from "../assets/images/kc-blacksoap.jpeg";
import img6 from "../assets/images/sagar.jpg";

export default function Process() {
  const steps = [
    {
      icon: <FaSeedling size={40} className="text-[#8116b4]" />,
      title: "Harvesting",
      text: "Shea fruits are collected by hand after they fall naturally from the trees."
    },
    {
      icon: <GiBoilingBubbles size={40} className="text-[#8116b4]" />,
      title: "Boiling & Drying",
      text: "The nuts are boiled to reduce moisture and then sun-dried to preserve them."
    },
    {
      icon: <GiCoconuts size={40} className="text-[#8116b4]" />,
      title: "Cracking",
      text: "The dried nuts are cracked to access the kernel inside."
    },
    {
      icon: <GiFire size={40} className="text-[#8116b4]" />,
      title: "Roasting",
      text: "The kernels are roasted to enhance quality and release their oils."
    },
    {
      icon: <GiSpinningBlades size={40} className="text-[#8116b4]" />,
      title: "Grinding",
      text: "Roasted kernels are ground into a thick, rich paste."
    },
    {
      icon: <FaHandHoldingWater size={40} className="text-[#8116b4]" />,
      title: "Kneading",
      text: "The paste is mixed with water and kneaded by hand to extract the oils."
    },
    {
      icon: <GiCauldron size={40} className="text-[#8116b4]" />,
      title: "Boiling & Skimming",
      text: "The separated fat is boiled to purify it, then skimmed off."
    },
    {
      icon: <FaRegSnowflake size={40} className="text-[#8116b4]" />,
      title: "Cooling & Packaging",
      text: "The liquid shea butter cools and solidifies, ready for packaging."
    },
  ];

  return (
    <>
      <AlertBar />
      <Navbar />
      <section className="w-full h-full bg-[#F5F3FF] flex items-center justify-center">
        <div className="w-5/6 my-12">

          <div data-aos="zoom-in">
            <h2 className="flex justify-center text-3xl md:text-4xl font-bold text-center">Experience the Craft of Shea Butter Making in Ghana</h2>

            <h3 style={{ fontFamily: "'Dancing Script', cursive" }}
              className="flex justify-center text-2xl md:text-4xl font-bold text-[#8116b4] italic text-center mt-4">A Step-by-Step Journey Through Tradition and Care</h3>
            <p className="text-center py-6 md:py-10 px-6 text-lg max-w-4xl mx-auto">
              Shea butter is more than just a cosmetic ingredient, it’s a living legacy, lovingly passed down through generations in Ghana. At Kanzoni Cosmetics, we honor this heritage with an artisanal approach to production. Each stage of our process is guided by care, precision, and deep respect for the women who create it and the environment that sustains it.
            </p>
          </div>

          <div data-aos="fade-right" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
            {steps.map((step, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center transform hover:scale-110 transition duration-300">
                <div className="mb-4 flex justify-center">{step.icon}</div>
                <h4 className="text-xl font-semibold text-[#8116b4] mb-2">{step.title}</h4>
                <p className="text-gray-700 text-base">{step.text}</p>
              </div>
            ))}
          </div>

          <div data-aos="fade-right" className="mt-16 text-center">
            <h4 className="text-2xl md:text-3xl font-semibold text-[#8116b4] mb-4">Did You Know?</h4>
            <p className="text-lg px-6 md:px-20 text-gray-700">
              Shea butter is rich in vitamins A and E and contains essential fatty acids that deeply moisturize the skin. Its production supports local
              economies, empowers women in rural communities, and preserves an age-old craft passed down through generations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-4 sm:px-8 lg:px-16">
        <div data-aos="fade-left">
          <h2 className="text-2xl md:text-3xl text-center font-semibold text-[#8116b4] mb-4">
            From Tradition to Transformation: Our Natural Products
          </h2>
          <p className="text-lg px-6 md:px-20 text-gray-700 mb-10 text-center">
            Rooted in authentic Ghanaian tradition, our collection reflects the natural power of shea and carefully crafted blends. From the gentle cleansing of our Alata Black Soaps to the nourishing richness of our Shea Butter Body Creams and Raw Shea, each product is made to care for your skin with purity and purpose. Presented in eco-friendly styles like brown paper wrapping and reusable containers, our packaging carries the same respect for nature as the products themselves. Though we offer more, this selection highlights seven of our most trusted creations—natural, effective, and inspired by everyday wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-12">
          {/* Product 1 - Shea Butter */}
          <div className="bg-amber-50 p-4 rounded-lg shadow-md text-center transform hover:scale-105 transition duration-300">
            <img
              src={img1}
              alt="Raw Shea Butter"
              className="w-full h-40 md:h-55 object-cover rounded"
            />
            <h3 className="text-xl font-medium mt-4">Raw Shea Butter</h3>
            <p className="text-sm text-gray-600 mt-2">
              Luxuriously rich cream made with shea butter and natural oils to deeply hydrate and smooth skin.
            </p>
          </div>

          {/* Product 2 - Shea Butter Lotion */}
          <div className="bg-amber-50 p-4 rounded-lg shadow-md text-center transform hover:scale-105 transition duration-300">
            <img
              src={img3}
              alt="Shea Butter Lotion"
              className="w-full h-40 md:h-55 object-cover rounded"
            />
            <h3 className="text-xl font-medium mt-4">Shea Butter Lotion</h3>
            <p className="text-sm text-gray-600 mt-2">
              A creamy blend of shea butter and essential oils that softens and nourishes dry skin naturally.
            </p>
          </div>

          {/* Product 3 - Alata Shower Gel */}
          <div className="bg-amber-50 p-4 rounded-lg shadow-md text-center transform hover:scale-105 transition duration-300">
            <img
              src={img6}
              alt="Alata Shower Gel"
              className="w-full h-40 md:h-55 object-cover rounded"
            />
            <h3 className="text-xl font-medium mt-4">Alata Shower Gel</h3>
            <p className="text-sm text-gray-600 mt-2">
              Liquid black soap enriched with shea and herbal extracts, perfect for daily skin cleansing.
            </p>
          </div>

          {/* Product 4 - Alata Black Soap */}
          <div className="bg-amber-50 p-4 rounded-lg shadow-md text-center transform hover:scale-105 transition duration-300">
            <img
              src={img2}
              alt="Alata Black Soap"
              className="w-full h-40 md:h-55 object-cover rounded"
            />
            <h3 className="text-xl font-medium mt-4">Pure Alata Black Soap</h3>
            <p className="text-sm text-gray-600 mt-2">
              Traditional Ghanaian soap made from plantain peels and cocoa pods — gentle, natural, and effective.
            </p>
          </div>

          {/* Product 5 - Shea Butter */}
          <div className="bg-amber-50 p-4 rounded-lg shadow-md text-center transform hover:scale-105 transition duration-300">
            <img
              src={img4}
              alt="Raw Shea Butter"
              className="w-full h-40 md:h-55 object-cover rounded"
            />
            <h3 className="text-xl font-medium mt-4">Shea Butter Cream</h3>
            <p className="text-sm text-gray-600 mt-2">
              Concentrated shea butter formula that restores moisture, soothes dryness, and protects hair & skin’s natural barrier.
            </p>
          </div>

          {/* Product 6 - Alata Black Soap small */}
          <div className="bg-amber-50 p-4 rounded-lg shadow-md text-center transform hover:scale-105 transition duration-300">
            <img
              src={img5}
              alt="Alata Black Soap Small Size"
              className="w-full h-40 md:h-55 object-cover rounded"
            />
            <h3 className="text-xl font-medium mt-4">Alata Black Soap (mixed)</h3>
            <p className="text-sm text-gray-600 mt-2">
              Traditional Ghanaian soap made from plantain peels and cocoa pods — gentle, natural, and effective.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F3FF] py-12 px-4 sm:px-8 lg:px-16">
        <h2 className="text-2xl md:text-3xl text-center font-semibold text-[#8116b4] mb-6">
          Traditional Tools & Community Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image Placeholder */}
          <div data-aos="fade-right" className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
            {/* Replace with actual image */}
            <img
              src={imgCommunity}
              alt="Traditional tools used in shea butter production"
              className="w-full h-64 object-cover"
            />

            <div className="w-full h-64 absolute inset-0 bg-black opacity-40"></div>
          </div>

          {/* Text Content */}
          <div data-aos="fade-left" className="text-lg text-gray-700 space-y-4 text-justify">
            <p>
              In many parts of Ghana, shea butter production still honors the tools of the past — grinding stones worn smooth by years of use, sturdy wooden paddles, and wide metal bowls that have served generations of artisans.
            </p>
            <p>
              These tools aren’t just practical; they’re part of a living heritage. Women gather in cooperatives, working side-by-side to hand-process shea nuts, preserving ancestral techniques while creating jobs, income, and unity within their communities. Every jar of shea butter carries their skill, tradition, and resilience.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
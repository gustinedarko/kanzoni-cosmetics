import { useState, useEffect } from "react";
import cropSoap from "../assets/images/hygiene.jpg";

const ingredients = [
  {
    name: "Raw Shea Butter",
    description: "Rich in fatty acids and vitamins, deeply moisturizes, nourishes, and protects the skin.",
    descriptionTwo: "Our raw Shea butter is sourced from the heart of Ghana, celebrated for its exceptional skin benefits. Naturally rich in vitamins A, E, and F, it helps boost collagen production, improve elasticity, and heal dryness. It forms a gentle barrier against harsh weather, keeping your skin smooth, supple, and radiant all year round.",
  },
  {
    name: "Coconut Oil",
    description: "Naturally antibacterial and deeply hydrating, leaves skin soft, smooth, and refreshed.",
    descriptionTwo: "Coconut oil is a natural skincare treasure, packed with nourishing fatty acids that penetrate deeply to moisturize from within. Its antibacterial and anti-inflammatory properties help protect against skin irritation while maintaining a healthy glow. Perfect for soothing dry patches, reducing redness, and restoring softness, it’s an essential ingredient in our moisturizing blends.",
  },
  {
    name: "Palm Kernel Oil",
    description: "Rich in antioxidants and omega fatty acids, supports skin repair and regeneration.",
    descriptionTwo: "Palm kernel oil is known for its exceptional ability to nourish and revitalize skin. Packed with antioxidants like vitamin E, it helps combat free radicals that cause premature aging. Its omega fatty acids support skin cell renewal, improving texture and restoring a healthy, youthful appearance while locking in moisture for lasting hydration.",
  },
  {
    name: "Potash",
    description: "Traditional ingredient used in African skincare for gentle cleansing and skin softness.",
    descriptionTwo: "Potash is a key natural ingredient in authentic African black soap, known for its mild exfoliating and cleansing properties. It helps remove impurities without stripping away natural oils, leaving the skin soft and refreshed. When blended with Shea butter and oils, it creates a balanced, skin-friendly soap perfect for daily use.",
  },
  {
    name: "Essential Oils",
    description: "Natural plant extracts that add fragrance while offering skin-healing benefits.",
    descriptionTwo: "Our essential oils are carefully selected for their therapeutic properties and natural aromas. From soothing lavender to refreshing citrus, each oil brings unique benefits, such as calming irritation, reducing inflammation, or boosting hydration. These potent plant extracts enhance the sensory experience of our products while supporting healthy, balanced skin.",
  },
];

export default function BottomHomeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ingredients.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section
      className="relative w-full h-full md:h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${cropSoap})` }}
    >

      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="w-full h-full flex flex-col items-center justify-center text-center">
        {/* Fixed Heading and Content */}
        <div className="relative z-20 w-full h-full flex items-center justify-center">
          <div className="text-center max-w-3xl px-4">
            <h3
              style={{ fontFamily: "'Dancing Script', cursive" }}
              className="text-[#8116b4] text-4xl md:text-5xl font-bold tracking-wider md:tracking-normal italic mb-6"
            >
              Ingredients Behind Our Products
            </h3>
            {/* Sliding Text */}
            <div className="relative h-40">
              {ingredients.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                >
                  <p className="text-[#8116b4] text-2xl font-bold mb-2">
                    {item.name}
                  </p>
                  <p className="text-white text-lg md:text-xl">
                    {item.description}
                  </p>
                  <p className="text-white text-lg md:text-xl text-justify md:text-center">
                    {item.descriptionTwo}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {ingredients.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentSlide ? "bg-white" : "bg-white/40"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
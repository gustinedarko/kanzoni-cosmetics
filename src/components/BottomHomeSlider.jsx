import { useState, useEffect } from "react";
import cropSoap from "../assets/images/hygiene.jpg";

const ingredients = [
  {
    name: "Shea Nut",
    description: "Rich in fatty acids and vitamins, shea nut deeply moisturizes and nourishes the skin.",
    descriptionTwo: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi minima nesciunt incidunt molestiae officiis tempora. Totam corporis eos obcaecati. Fugit!",
  },
  {
    name: "Coconut Oil",
    description: "Provides antibacterial properties and helps in softening and hydrating the skin.",
    descriptionTwo: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi minima nesciunt incidunt molestiae officiis tempora. Totam corporis eos obcaecati. Fugit!.",
  },
  {
    name: "Baobab Oil",
    description: "Packed with antioxidants and omega fatty acids, great for skin regeneration.",
    descriptionTwo: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi minima nesciunt incidunt molestiae officiis tempora. Totam corporis eos obcaecati. Fugit!.",
  },
  {
    name: "Cocoa Butter",
    description: "Creates a protective barrier that holds in moisture and soothes skin.",
    descriptionTwo: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi minima nesciunt incidunt molestiae officiis tempora. Totam corporis eos obcaecati. Fugit!.",
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

      {/* Fixed Heading and Content */}
      <div className="relative z-20 w-full h-full flex items-center justify-center">
        <div className="text-center max-w-3xl px-4">
          <h3
            style={{ fontFamily: "'Dancing Script', cursive" }}
            className="text-[#5C4D9A] text-5xl md:text-6xl font-bold tracking-wider italic mb-6"
          >
            Ingredients we make use of
          </h3>

          {/* Sliding Text */}
          <div className="relative h-40">
            {ingredients.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-[#5C4D9A] text-2xl font-bold mb-2">
                  {item.name}
                </p>
                <p className="text-white text-base md:text-xl">
                  {item.description}
                </p>
                <p className="text-white text-base md:text-xl">
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
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

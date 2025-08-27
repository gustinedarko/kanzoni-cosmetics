import AlertBar from "../components/AlertBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgAboutImageI from "../assets/images/prodution2.jpeg"
import bgAboutImageIi from "../assets/images/girl-about.jpg"
import ourStoryImage from "../assets/images/zach.jpg"
import foundersImage from "../assets/images/founder-profile.png"
import ourMissionImage from "../assets/images/annie-4.jpg"
import { useEffect, useState } from "react";

export default function AboutUs() {

  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMd(window.innerWidth >= 768); // md breakpoint
    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <AlertBar />
      <Navbar />
      <section
        className="relative h-screen w-full flex justify-center items-center"
        style={{ backgroundImage: `url(${bgAboutImageI})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>

        {/* Hidden image to force preload */}
        <img src={bgAboutImageI} alt="" className="hidden" loading="eager" />


        <div className="absolute inset-0 bg-black opacity-40"></div>

        <h1 data-aos="fade-right" className="relative z-10 text-[#F7F4ED] text-5xl md:text-6xl font-bold text-center">About Kanzoni Cosmetics</h1>
      </section>

      <section className="h-full w-full bg-[#F5F3FF]">
        <div data-aos="fade-left" className="px-4 sm:px-6 lg:px-8 py-10 text-center">
          <h1 className="text-2xl md:text-3xl text-[#8116b4] font-medium">Who We Are and What We Do</h1>
          <p className="py-6 px-4 md:w-5/6 mx-auto text-lg text-justify md:text-center">Kanzoni Cosmetics Industry Limited was founded in 2019 after in-depth research into the potential of Africa’s shea butter industry. Inspired by Ghana’s rich heritage and the global demand for natural skincare, we set out to create pure, organic products using only the finest raw ingredients. From raw shea butter to nourishing lotions, soaps, and shower gels, we craft skincare that celebrates tradition, supports local communities, and delivers lasting benefits to your skin.</p>
        </div>
      </section>

      <section className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgAboutImageIi})` }}>

        <div className="absolute inset-0 bg-black opacity-60"></div>
      </section>

      <section className="h-full w-full bg-white">
        <div data-aos="fade-right" className="px-4 sm:px-6 lg:px-8 py-10 text-center">
          <h1 className="text-2xl md:text-3xl text-[#8116b4] font-medium">Why Choose Kanzoni Cosmetics?</h1>
          <p className="py-6 px-4 md:w-5/6 mx-auto text-lg text-justify md:text-center">At Kanzoni Cosmetics, we pride ourselves on crafting pure, natural skincare products rooted in the rich traditions of Ghana. Every product we make is inspired by nature’s abundance and created with respect for both people and the environment. From sourcing the finest raw shea butter to handcrafting blends enriched with essential oils, we ensure that every jar and bottle reflects our commitment to quality, sustainability, and authenticity. Our mission is simple — to help you glow inside and out, while supporting the communities that have preserved this heritage for generations.</p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-10 bg-[#F5F3FF]">
        <h2 className="text-3xl text-[#8116b4] font-medium mb-10 text-center">Our Story</h2>

        <div className="flex flex-col md:flex-row gap-6 items-center">

          <div data-aos={isMd ? "fade-up" : "fade-left"} className="md:basis-1/2 px-4">
            <img
              src={ourStoryImage}
              alt="Our Story Image"
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>

          <div data-aos={isMd ? "fade-down" : "fade-right"} className="md:basis-1/2 px-4">
            <p className="text-lg text-justify mb-2 md:mb-4">
              At Kanzoni Cosmetics Industries Limited, our journey began with a passion to transform shea nuts into high-quality shea butter and cosmetic products for everyday use. Since our establishment in 2020, we have dedicated ourselves to processing, packaging, and marketing a wide range of natural soaps, creams, lotions, and detergents for local communities.
            </p>
            <p className="text-lg text-justify">
              Beyond producing cosmetics, our story is deeply rooted in empowerment. We work closely with rural women’s groups across Northern Ghana, encouraging sustainable shea nut picking and processing. By supporting female entrepreneurs and protecting shea trees as valuable economic resources, we combine business growth with social impact, poverty reduction, and environmental preservation.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-10 bg-[#9C88FF] text-white">
        <h2 className="text-3xl font-medium mb-10 text-center">Founder</h2>

        <div className="flex flex-col-reverse md:flex-row gap-6 items-center">

          <div data-aos="fade-left" className="md:basis-1/2 px-4">
            <p className="text-lg text-center md:text-justify mb-2 md:mb-4">
              Growing up, I witnessed the strength of women in our communities and their tireless work in shea nut collection. That experience planted a deep passion in me to create a brand that values their efforts, transforms raw potential into quality products, and provides opportunities for lasting economic independence.
            </p>
            <p className="text-lg text-center md:text-justify">
              Kanzoni Cosmetics Industries Limited was born out of this vision — to blend tradition with innovation. Every product we create reflects our commitment to quality, community, and sustainability. Beyond cosmetics, we are building a legacy that empowers rural women, protects our environment, and celebrates the true wealth of Ghana.
            </p>
          </div>

          <div data-aos="fade-right" className="md:basis-1/2 px-4">
            <img
              src={foundersImage}
              alt="Founders Image"
              className="w-full max-w-md md:max-w-lg h-auto max-h-[400px] rounded-xl object-cover md:object-right-top mx-auto"
            />
          </div>

        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-10 bg-[#F5F3FF]">
        <h2 className="text-3xl text-[#8116b4] font-medium mb-10 text-center">Our Mission</h2>

        <div className="flex flex-col md:flex-row gap-6 items-center">

          <div data-aos={isMd ? "fade-up" : "fade-left"} className="md:basis-1/2 px-4">
            <img
              src={ourMissionImage}
              alt="Our Story"
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>

          <div data-aos={isMd ? "fade-down" : "fade-right"} className="md:basis-1/2 px-4">
            <p className="text-lg text-justify mb-2 md:mb-4">
              Mission: Our Mission is to Empower and Promote Women Shea Collectors in Rural Communities through
              optimal utilization of the Shea tree and its bye-products for economic growth. We aim to create lasting opportunities
              that uplift families, preserve traditions, and inspire future generations.
            </p>
            <p className="text-lg text-justify">
              Vision: Our Vision is to become the leading cosmetic manufacturing company in Ghana with full
              dedication, innovation and total commitment in our chosen industry; we remain the indigenous ideal Shea-based cosmetics company. We envision building a brand that not only thrives in global markets but also
              stands as a beacon of empowerment and sustainability.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
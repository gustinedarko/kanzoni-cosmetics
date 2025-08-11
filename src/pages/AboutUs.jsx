import AlertBar from "../components/AlertBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgAboutImageI from "../assets/images/aakash-1.jpg"
import bgAboutImageIi from "../assets/images/robbie.jpg"
import ourStoryImage from "../assets/images/zach.jpg"
import foundersImage from "../assets/images/hanna.jpg"
import ourMissionImage from "../assets/images/annie-4.jpg"

export default function AboutUs() {
    return (
        <>
            <AlertBar />
            <Navbar />
            <section
                className="relative h-screen w-full flex justify-center items-center"
                style={{ backgroundImage: `url(${bgAboutImageI})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
                
                <div className="absolute inset-0 bg-black opacity-60"></div>
                
                <h1 className="relative z-10 text-[#5C4D9A] text-5xl md:text-6xl font-bold text-center">About Us</h1>
            </section>

            <section className="h-full w-full bg-[#F5F3FF]">
                <div className="px-4 sm:px-6 lg:px-8 py-10 text-center">
                    <h1 className="text-2xl md:text-3xl text-[#9C88FF] font-medium">Who we are and What we do</h1>
                    <p className="py-10 px-12 text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, numquam hic suscipit rem exercitationem iusto quidem officiis natus voluptatibus non, explicabo reiciendis laudantium, deserunt placeat! Sint deserunt optio rem quo vero, modi minima ipsam facilis beatae ducimus est itaque cumque autem perferendis iusto illum. Iure quasi quos neque quae ipsa?</p>
                </div>
            </section>

            <section className="h-screen w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgAboutImageIi})` }}>
                <div></div>
            </section>

            <section className="h-full w-full bg-white">
                <div className="px-4 sm:px-6 lg:px-8 py-10 text-center">
                    <h1 className="text-2xl md:text-3xl text-[#9C88FF] font-medium">Why Choose Kanzoni Cosmetics?</h1>
                    <p className="py-10 px-12 text-lg">At Kanzoni Cosmetics, we pride ourselves on crafting pure, natural skincare products rooted in the rich traditions of Ghana. Every product we make is inspired by nature’s abundance and created with respect for both people and the environment. From sourcing the finest raw shea butter to handcrafting blends enriched with essential oils, we ensure that every jar and bottle reflects our commitment to quality, sustainability, and authenticity. Our mission is simple — to help you glow inside and out, while supporting the communities that have preserved this heritage for generations.</p>
                </div>
            </section>

            <section className="px-4 sm:px-6 lg:px-8 py-10 bg-[#F5F3FF]">
                <h2 className="text-3xl text-[#9C88FF] font-medium mb-10 text-center">Our Story</h2>

                <div className="flex flex-col md:flex-row gap-6 items-center">
                    
                    <div className="md:basis-1/2 px-4">
                        <img
                            src={ourStoryImage}
                            alt="Our Story"
                            className="w-full h-auto rounded-xl object-cover"
                        />
                    </div>
                    
                    <div className="md:basis-1/2 px-4">
                        <p className="text-lg text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, numquam hic suscipit rem exercitationem iusto quidem officiis natus voluptatibus non, explicabo reiciendis laudantium, deserunt placeat!
                            Sint deserunt optio rem quo vero, modi minima ipsam facilis beatae ducimus est itaque cumque autem perferendis iusto illum. Iure quasi quos neque quae ipsa?
                        </p>
                        <p className="text-lg text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, numquam hic suscipit rem exercitationem iusto quidem officiis natus voluptatibus non, explicabo reiciendis laudantium, deserunt placeat!
                            Sint deserunt optio rem quo vero, modi minima ipsam facilis beatae ducimus est itaque cumque autem perferendis iusto illum. Iure quasi quos neque quae ipsa?
                        </p>
                    </div>
                </div>
            </section>

            <section className="px-4 sm:px-6 lg:px-8 py-10 bg-[#9C88FF] text-white">
                <h2 className="text-3xl font-medium mb-10 text-center">Founder.</h2>

                <div className="flex flex-col-reverse md:flex-row gap-6 items-center">
                    
                    <div className="md:basis-1/2 px-4">
                        <p className="text-lg text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, numquam hic suscipit rem exercitationem iusto quidem officiis natus voluptatibus non, explicabo reiciendis laudantium, deserunt placeat!
                            Sint deserunt optio rem quo vero, modi minima ipsam facilis beatae ducimus est itaque cumque autem perferendis iusto illum. Iure quasi quos neque quae ipsa?
                        </p>
                        <p className="text-lg text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, numquam hic suscipit rem exercitationem iusto quidem officiis natus voluptatibus non, explicabo reiciendis laudantium, deserunt placeat!
                            Sint deserunt optio rem quo vero, modi minima ipsam facilis beatae ducimus est itaque cumque autem perferendis iusto illum. Iure quasi quos neque quae ipsa?
                        </p>
                    </div>
                    
                    <div className="md:basis-1/2 px-4">
                        <img
                            src={foundersImage}
                            alt="Our Story"
                            className="w-full h-auto rounded-xl object-cover"
                        />
                    </div>

                </div>
            </section>

            <section className="px-4 sm:px-6 lg:px-8 py-10 bg-[#F5F3FF]">
                <h2 className="text-3xl text-[#9C88FF] font-medium mb-10 text-center">Our Mission</h2>

                <div className="flex flex-col md:flex-row gap-6 items-center">
                    
                    <div className="md:basis-1/2 px-4">
                        <img
                            src={ourMissionImage}
                            alt="Our Story"
                            className="w-full h-auto rounded-xl object-cover"
                        />
                    </div>
                    
                    <div className="md:basis-1/2 px-4">
                        <p className="text-lg text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, numquam hic suscipit rem exercitationem iusto quidem officiis natus voluptatibus non, explicabo reiciendis laudantium, deserunt placeat!
                            Sint deserunt optio rem quo vero, modi minima ipsam facilis beatae ducimus est itaque cumque autem perferendis iusto illum. Iure quasi quos neque quae ipsa?
                        </p>
                        <p className="text-lg text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, numquam hic suscipit rem exercitationem iusto quidem officiis natus voluptatibus non, explicabo reiciendis laudantium, deserunt placeat!
                            Sint deserunt optio rem quo vero, modi minima ipsam facilis beatae ducimus est itaque cumque autem perferendis iusto illum. Iure quasi quos neque quae ipsa?
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
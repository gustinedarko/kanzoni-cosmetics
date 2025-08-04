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
                className="h-screen w-full flex justify-center items-center"
                style={{ backgroundImage: `url(${bgAboutImageI})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
                <h1 className="text-[#5C4D9A] text-5xl md:text-6xl font-bold text-center">About Us</h1>
            </section>

            <section className="h-full w-full bg-[#F7F4ED]">
                <div className="px-4 sm:px-6 lg:px-8 py-10 text-center">
                    <h1 className="text-4xl text-[#9C88FF] font-medium">Who we are and What we do.</h1>
                    <p className="py-10 px-12 text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, numquam hic suscipit rem exercitationem iusto quidem officiis natus voluptatibus non, explicabo reiciendis laudantium, deserunt placeat! Sint deserunt optio rem quo vero, modi minima ipsam facilis beatae ducimus est itaque cumque autem perferendis iusto illum. Iure quasi quos neque quae ipsa?</p>
                </div>
            </section>

            <section className="h-screen w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgAboutImageIi})` }}>
                <div></div>
            </section>

            <section className="px-4 sm:px-6 lg:px-8 py-10 bg-[#F7F4ED]">
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

            <section className="px-4 sm:px-6 lg:px-8 py-10 bg-[#F7F4ED]">
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
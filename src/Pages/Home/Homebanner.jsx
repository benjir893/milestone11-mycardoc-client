import banner1 from '../../assets/images/banner/1.jpg';
import banner2 from '../../assets/images/banner/2.jpg';
import banner3 from '../../assets/images/banner/3.jpg';
import banner4 from '../../assets/images/banner/4.jpg';
// import Marquee from "react-fast-marquee";

const Homebanner = () => {
    return (
        <div className="">
           
                <div className="carousel w-full h-96">
                    <div id="slide1" className="carousel-item relative w-full h-96 ">
                        <img
                            src={banner1}
                            className="w-full h-full" />
                        <div className="absolute h-full   justify-start bg-gradient-to-r from-[#000000] to-transparent">
                            <h1 className="text-3xl pl-10 pt-10 font-Gupta font-bold text-white">Affordable <br /> Price for car <br /> Servicing</h1>
                            <p className="text-lg pl-10 font-teko font-semibold text-white">We are strict what we said. <br />Our service talks for ourselves. <br />Customers happiness is our priority </p>
                            <div className="mt-3">
                                <button className="btn btn-active btn-secondary rounded-none pl-6 pr-6 ml-10 mr-5 bg-transparent border border-solid border-white">Discovder more..</button>
                                <button className="btn btn-active btn-secondary rounded-none pl-6 pr-6 border border-solid border-white">Current projects..</button>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                            <a href="#slide4" className="btn btn-circle bg-inherit">❮</a>
                            <a href="#slide2" className="btn btn-circle bg-inherit">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src={banner2}
                            className="w-full" />
                        <div className="absolute h-full   justify-start bg-gradient-to-r from-[#000000] to-transparent">
                            <h1 className="text-3xl pl-10 pt-10 font-Gupta font-bold text-white">Affordable <br /> Price for car <br /> Servicing</h1>
                            <p className="text-lg pl-10 font-teko font-semibold text-white">We are strict what we said. <br />Our service talks for ourselves. <br />Customers happiness is our priority </p>
                            <div className="mt-3">
                                <button className="btn btn-active btn-secondary rounded-none pl-6 pr-6 ml-10 mr-5">Secondary</button>
                                <button className="btn btn-outline btn-secondary rounded-none pl-6 pr-6">Secondary</button>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                            <a href="#slide1" className="btn btn-circle bg-inherit">❮</a>
                            <a href="#slide3" className="btn btn-circle bg-inherit">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src={banner3}
                            className="w-full" />
                        <div className="absolute h-full   justify-start bg-gradient-to-r from-[#000000] to-transparent">
                            <h1 className="text-3xl pl-10 pt-10 font-Gupta font-bold text-white">Affordable <br /> Price for car <br /> Servicing</h1>
                            <p className="text-lg pl-10 font-teko font-semibold text-white">We are strict what we said. <br />Our service talks for ourselves. <br />Customers happiness is our priority </p>
                            <div className="mt-3">
                                <button className="btn btn-active btn-secondary rounded-none pl-6 pr-6 ml-10 mr-5">Secondary</button>
                                <button className="btn btn-outline btn-secondary rounded-none pl-6 pr-6">Secondary</button>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                            <a href="#slide2" className="btn btn-circle bg-inherit">❮</a>
                            <a href="#slide4" className="btn btn-circle bg-inherit">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            src={banner4}
                            className="w-full" />
                        <div className="absolute h-full   justify-start bg-gradient-to-r from-[#000000] to-transparent">
                            <h1 className="text-3xl pl-10 pt-10 font-Gupta font-bold text-white">Affordable <br /> Price for car <br /> Servicing</h1>
                            <p className="text-lg pl-10 font-teko font-semibold text-white">We are strict what we said. <br />Our service talks for ourselves. <br />Customers happiness is our priority </p>
                            <div className="mt-3">
                                <button className="btn btn-active btn-secondary rounded-none pl-6 pr-6 ml-10 mr-5">Secondary</button>
                                <button className="btn btn-outline btn-secondary rounded-none pl-6 pr-6">Secondary</button>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                            <a href="#slide3" className="btn btn-circle bg-inherit">❮</a>
                            <a href="#slide1" className="btn btn-circle bg-inherit">❯</a>
                        </div>
                    </div>
                </div>
            

        </div>
    );
};

export default Homebanner;
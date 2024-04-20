import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar1 from "../components/Navbar/Navbar";
import Cards from "../components/Card/Cards";
import Carousel from "../components/Carousel/Carousel";


function Home() {
    return (
        <div>
            <div>
                <Navbar1 />
            </div>
            <div>
                <Carousel />
            </div>
            <div className="m-3">
                <Cards />
                <Cards />
                <Cards />
                <Cards />

            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
export default Home;
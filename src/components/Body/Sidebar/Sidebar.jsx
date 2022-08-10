import React from "react";
import Home from './Logo/home.png'
import Contact from './Logo/contact.jpg'
import FAQ from './Logo/FAQ.jpg'
import Shop from './Logo/shop.jpg'
import About from './Logo/about.png'

const Sidebar = () => {
    return (
        <div className="flex flex-col items-stretch px-5">
            <div className="flex self-center items-stretch py-5 ">
                <img className="self-center object-contain h-5 w-5" src={Home} alt="home" />
                <div className="self-center font-bhuTuka"> Home </div>
            </div>

            <div className="flex self-center items-stretch py-5 ">
                <img className="self-center object-contain h-5 w-5" src={About} alt="about" />
                <div className="self-center font-bhuTuka"> About </div>
            </div>

            <div className="flex self-center items-stretch py-5 ">
                <img className="self-center object-contain h-5 w-5" src={Shop} alt="shop" />
                <div className="self-center font-bhuTuka"> Shop </div>
            </div>

            <div className="flex self-center items-stretch py-5 ">
                <img className="self-center object-contain h-5 w-5" src={FAQ} alt="faq" />
                <div className="self-center font-bhuTuka"> FAQ </div>
            </div>

            <div className="flex self-center items-stretch py-5">
                <img className="self-center object-contain h-5 w-5" src={Contact} alt="contact" />
                <div className="self-center font-bhuTuka"> Contact </div>
            </div>

        </div>
    )

}

export default Sidebar
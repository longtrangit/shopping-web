import React from "react";
import './Header.css';
import Logo from './Logo/Logo.jpg'
import Slogan from './Logo/Slogan.jpg'
import Sale from './Logo/sale.jpg'
import Search from './Logo/search.jpg'
import Place from './Logo/Place.jpg'
import SeeMore from './Logo/seemore.png'
import Cart from './Logo/cart.jpg'
const Header = () => {
    return (<div className="flex flex-nowrap items-stretch">
        <div className="flex flex-1">
            <div className="flex flex-1 items-stretch" >
                <div className="flex items-stretch flex-row flex-1">
                    <div className="flex items-stretch">

                        <img className="self-center object-contain h-10 w-10" src={Logo} alt="logo" />
                        <div className="self-center text-1xl font-bhuTuka" > Modern</div>

                    </div>
                    <div className="flex-1 flex justify-center">
                        <img className="object-contain h-14 block" src={Slogan} alt="slogan" />
                    </div>


                    <img className="self-center object-contain h-10 w-10" src={Sale} alt="salelogo" />
                </div>
            </div>

            <img className="self-center object-contain h-10 w-10" src={Search} alt="search" />
            <img className="self-center object-contain h-10 w-10" src={Place} alt="place" />
            <img className="self-center object-contain h-10 w-10" src={Cart} alt="cart" />

        </div>
        <img className="self-center object-contain h-10 w-10" src={SeeMore} alt="seemore" />
    </div>)
}

export default Header
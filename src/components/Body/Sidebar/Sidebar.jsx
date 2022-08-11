import React from "react";
import Home from './Logo/home.png'
import Contact from './Logo/contact.jpg'
import FAQ from './Logo/FAQ.jpg'
import Shop from './Logo/shop.jpg'
import About from './Logo/about.png'
import { useState } from "react";
import Button from "./Button/Button";


const Sidebar = () => {

    const [btns, setBtns] = useState([
        { pic: Home, name: "Home", state: "" },
        { pic: Contact, name: "Contact", state: "" },
        { pic: FAQ, name: "FAQ", state: "" },
        { pic: Shop, name: "Shop", state: "" },
        { pic: About, name: "About", state: "" }])
    const clickHandler = (index) => {

        btns.map((btn) => {
            setBtns(btn.state = "")
        })
        let clonedBtns = [...btns];
        clonedBtns[index].state = "flex bg-gray-400 rounded-lg";
        setBtns(clonedBtns)

    }

    return (

        <div className="flex flex-col px-5">

            {btns.map((btn, index) => <Button
                src={btn.pic}
                btn={btn.state}
                index={index}
                name={btn.name}
                btnClicked={clickHandler}
            />

            )}

        </div>
    )

}

export default Sidebar
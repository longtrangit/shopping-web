import React from "react";



const Button = (props) => {

    return (

        <button className={props.btn} onClick={() => { props.btnClicked(props.index) }} >
            <div className="flex self-center items-stretch py-5 px-10 ">
                <img className="self-center object-contain h-5 w-5" src={props.src} />
                <div className="self-center font-bhuTuka"> {props.name} </div>
            </div>
        </button>

    )

}

export default Button
import React from "react";
import image from "../images/web.svg";

export default function Navbar() {
    return (
        <nav>
            <img src={image} alt="the world" className="nav--logo"/>
             <h6 className="nav--title">Corey's Travel Journal</h6>
        </nav>
    )
}
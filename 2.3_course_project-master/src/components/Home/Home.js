import React from "react";
import home from "./Home2.png";

export default function Home() {
    return (
        <div className="home"> 
            <div className="order-button">
            <button>Order Now</button>
            </div>
            <p>   
            <img alt="home" src={home} />
            </p>
            
        </div>   
    )
}
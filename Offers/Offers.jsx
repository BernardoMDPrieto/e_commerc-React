import React from "react";
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
const Offer = () => {
    return(
        <div className="offers">
            <div className="offers-left">
                <h2>Exclusive</h2>
                <h2>Offers For You</h2>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div className="offers-ritht">
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    )
}
export default Offer
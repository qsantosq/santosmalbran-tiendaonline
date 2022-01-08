import React from 'react'
import "./CartWidget.css"
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import {Link} from "react-router-dom"; 
    

const CartWidget = () => {
    const { carro } = useContext(CartContext);

    return (
        <Link to={"/cart"} className="widg">
        <div className="container-CartWidget">
            <i className="fas fa-shopping-cart cart"></i>
            <p className="contador">{carro.length}</p>
        </div>
        </Link>
    )
}

export default CartWidget
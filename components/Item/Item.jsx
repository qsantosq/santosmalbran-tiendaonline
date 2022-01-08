import React from 'react'
import "./item.css"
import { Link } from "react-router-dom"


const Item = ({ productos }) => {

    
    return (
        <div className="card">
            <div className="contenedor-items">

                <div className="contenedor-tituloItems">
                    <h2> {productos.name} </h2>
                </div>

                <div className="contenedor-imagen"> 
                    <img src={productos.img} alt={productos.name} className="img-prod" /> 
                </div>

                <div className="contenedor-precio"> 
                    <p>{productos.precio}</p>
                </div>
                <Link to={`/detail/${productos.id}`}>
                    Pedir
                </Link>
            </div>
        </div>

    )
}

export default Item
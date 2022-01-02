import React from 'react'
import "./ItemDetail.css"


const ItemCard = ({productos}) => {

    return (
        <div className="contenedor-general">

             <h1> Detalle del producto </h1>
            <div className="contenedor-detalle">
                  <img src={productos.img} alt={productos.name} className="img-detalle" />
                    <div className="contenedor-desc">
                          <h2 className="titulo">{productos.name}</h2>
                         <p className="desc">{productos.description}</p>
                    <div>
                        <div className="contenedor-precio">
                            <div className="precio">
                                  <p className="color-precio">{productos.precio}</p>
                            </div>

                            <button className="button-volver">Lista de Productos</button>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default ItemCard;
import React from 'react'
import ItemCard from './ItemCard'
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import CartContext from "../../context/CartContext";



const ItemDetail = ( { productos }) => {
    console.log("Aca este es el producto en ItemDetail", productos)
    const [boton, setBoton] = useState(true);
    
    const {addItem} = useContext(CartContext)

    if (productos === undefined){

        return(
        <>
        <h1>Cargando</h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Loader.gif/480px-Loader.gif" alt="loading" srcset="" />
        </>
        
        )
        }else{
                  const Count = ItemCount;
                  const onAdd = (Count) =>{
                     alert("Se agregaron la cantidad de " + Count + " " + productos.nombre + " al carrito" )
                     console.log("Se agregaron la cantidad de " + Count + productos.nombre)
                     addItem(productos, Count);
                     setBoton(false);
            }  
            
            return(
                <div className="contenedor-caja">

                    <ItemCard key={productos.paramId} productos={productos} />

                     {boton ? 
                        (<Count onConfirm={onAdd} maxQuantity={productos?.stock}/>) 
                        :
                        (<Link to={"/cart"} >Ir al carrito</Link>)
                     }    

                </div>
            );
        }}


    

    export default ItemDetail
   
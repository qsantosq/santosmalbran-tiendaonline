import { useContext } from "react";
import CartContext from "../../context/CartContext";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom"; 


import "./Cart.css";

const Cart = () => {
  const { carro, remove, clear } = useContext(CartContext);
  console.log("Aca esta el carrito" + carro);
  const [ sihayItems, setSihayItems] = useState(false);

  useEffect(() => {
    setSihayItems(false);
    if(carro.length === 0){
      setSihayItems(false);
    } else {
      setSihayItems(true);
    }
}, [carro]);

  return(
    <>
        {sihayItems ? 
          <div className="carrito">
          {carro.map((productos) => (
            <div className="contenedor-carrito" key={productos.id}>
    
                <div className="contenedor-detalles">
                  <div className="contenedor-img-carrito">
                     <img className="imagen-carrito" src={productos.img} alt={productos.name}/>
                </div>
    
                <div>
                  <h3>Nombre del producto: {productos.name}</h3>
                  <h3>Precio del producto: {productos.precio}</h3>
                  <h3>Cantidad a pedir: {productos.cantidad}</h3>

                  <button className="boton-carrito" onClick={() => remove(productos.id)}>
                    Borrar
                  </button>
                </div>
            </div>
    
            </div>
          ))}
    
          <button className="boton-carrito" onClick={clear}>
            Limpiar
          </button>
        </div>
        : 
        <div className='carrito'>
                <div>
                    <p> El carrito esta vacios </p>
                </div>
                <div>
                    <Link to={'/'}>Ira a la tienda</Link>
                </div>
        </div>}
    </>
  )
  }

export default Cart;
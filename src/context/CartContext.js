import React from 'react';

const CartContext = React.createContext();

export const Provider = ({children}) => {
    

    const [carro, setCarro] = React.useState([]);
    

    const carrito = (id) => {
        return carro.some((productos) => productos.id === id);
    };


    const totalPrice = () => {

        let precio = 0;

        carro.forEach(productos => {
            precio += productos.precio * productos.cantidad;
        });
        return precio;
    }


    const Cantidad = (productos, quantity) =>{
        const carrito = [...carro];
        carrito.forEach((productos) => {
            productos.id === productos.id && (productos.cantidad += quantity)
        })
     }  
     

    const addItem = (productos, quantity) => {
        if (carrito (productos.id)){
            Cantidad(productos, quantity);
            alert("se agrego al carrito");
 
        } else {
            setCarro([...carro, { ...productos, cantidad: quantity}]);

        }
 
    };



    const remove = (id) => {
      const borrar = carro.filter((productos) => productos.id !== id)
      alert("se borro un producto del carrito")
      setCarro(borrar)
    }

    const clear = () => {
        alert("se limpio el carrito")
        setCarro([])
    }




    return (

        <CartContext.Provider value={{carro, addItem, remove, clear, totalPrice}}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContext;
import React from 'react'
import "./ItemCount.css"

const ItemCount = ({onConfirm, maxQuantity}) => {

        const [onAdd, setOnAdd] = React.useState(1)
    
        const sumar = () => {
            if ( onAdd < maxQuantity){
                setOnAdd (onAdd + 1);}
        }
        
        const restar = () => {
            if ( onAdd >= 2){
                setOnAdd (onAdd - 1);}
        }

    return (

        <div className="contador">
            
            <div className="contenedor-contador">
                <button className="resta" onClick={() => restar()}>
                    -
                </button>

                <p className="stock">
                    {onAdd}
                </p>

                <button className="suma" onClick={() => sumar() }>
                    +
                </button>
            </div>

            <button class="agregar-carrito" onClick={() => onConfirm(onAdd)}>
                Agregar a carrito
            </button>

        </div>
    )
}

export default ItemCount

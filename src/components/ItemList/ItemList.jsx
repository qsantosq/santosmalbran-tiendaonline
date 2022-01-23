import React from 'react'
import Item from '../Item/Item'


const ItemList = ({productos}) => {
    return ( 
        <ul>
            {productos.map((productos) => {
                return (
                    <Item key={productos.id} productos={productos}/>
                )
            })}        
        </ul>
 
    )
}

export default ItemList

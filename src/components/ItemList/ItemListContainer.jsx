import React from 'react'
import ItemList from '../ItemList/ItemList'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {db} from "../../services/firabase/firebase"
import {collection, getDocs, query, where} from "firebase/firestore";

    const ItemListContainer = () => {
  
    const [productos, setProductos] = React.useState([])
    const {categoriaId} = useParams();

    useEffect(() => {   
        if(!categoriaId) {
            getDocs(collection(db, "items")).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return {id: doc.id, ...doc.data()}
                } )
                setProductos(products)
            })
        }else {
            getDocs(query(collection(db, "items"), where("categoria", "==", categoriaId))).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return {id: doc.id, ...doc.data()}
                } )
                setProductos(products)
            })
        }
 
   
        return (() => {
            setProductos([])
        })
        
    }, [categoriaId])


    return (

        <div>
            <h1>Tienda Santos-Malbran </h1>
          
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer



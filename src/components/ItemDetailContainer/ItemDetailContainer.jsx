import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {db} from "../../services/firabase/firebase"
import {getDoc, doc,} from "firebase/firestore";

const ItemDetailContainer = () => {

    const [productos, setProductos] = React.useState([]);
    const { paramId } = useParams();
   

    useEffect(() => {
        getDoc(doc(db, "items", paramId)).then((querySnapshot) => {
            const product = {id: querySnapshot.id, ...querySnapshot.data()}
            setProductos(product);
        })

        return(() => {
            setProductos([]);
        });
    }, [paramId]);

    return(
        <div className="itemDetailContainer">
        <ItemDetail productos={productos}/>
      
        </div>
    );
}



 export default ItemDetailContainer


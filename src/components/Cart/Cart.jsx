import { useContext } from "react";
import CartContext from "../../context/CartContext";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom"; 
import {addDoc, collection,  writeBatch,
  doc, getDoc, getFirestore} from "firebase/firestore"
import "./Cart.css";



const Cart = () => {
  const { carro, remove, clear, total } = useContext(CartContext);
  const [ sihayItems, setSihayItems] = useState(false);
  const [proceso, setProceso] = useState(false);
  const [formulario, setFormulario] = useState({ name: "", email: "" });
  const date = new Date();

  const Formulario = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };


const orden = () => {
    setProceso(true);
    const db = getFirestore();

    const newOrder = {
      buyer: { email: formulario.email, name: formulario.name },
      items: carro,
      date: date,
    };

    const batch = writeBatch(db);
    const outOfStock = [];

    newOrder.items.forEach((prod) => {
      getDoc(doc(db, "items", prod.id)).then((docSnap) => {
        if (docSnap.data.stock >= prod.amount) {
          batch.update(doc(db, "items", docSnap.id), {
            stock: docSnap.data.stock - prod.amount,
          });
        } else {
          outOfStock.push({ id: docSnap.id, ...docSnap.data() });
        }
      });
    });

    if (outOfStock.length === 0) {
      addDoc(collection(db, "orders"), newOrder)
        .then((doc) => {
          batch.commit().then(() => {
            console.log(`el num de orden es ${doc.id}`);
          });
        })
        .catch((error) => {
          console.error(error);
        })
    }
  };

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
                  <h3>Nombre del producto: {productos.nombre}</h3>
                  <h3>Precio del producto: {productos.precio}</h3>
                  <h3>Cantidad a pedir: {productos.cantidad}</h3>

                  <button className="boton-carrito" onClick={() => remove(productos.id)}>
                    Borrar
                  </button>

                </div>
            </div>
    
            

            </div>
          ))}
                 <h3>
                    Total: $ {total()}
                </h3>
          <button className="boton-carrito" onClick={clear}>
            Limpiar
          </button>
                  {!proceso ? (
                <form method="POST" onSubmit={orden}>
                  <input
                    onChange={Formulario}
                    type="email"
                    name="email"
                    placeholder="email"
                  />
                  <input
                    onChange={Formulario}
                    type="text"
                    name="name"
                    placeholder="nombre"
                  />
                  <button
                    className='btn btn-success'
                    disabled={carro?.length === 0 || formulario.nombre === "" || formulario.email === ""}             
                  >
                    Finaliza tu compra!
                  </button>
                </form>
              ) : (
                <h1>Felicitaciones, compra exitosa</h1>
              )}
               
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
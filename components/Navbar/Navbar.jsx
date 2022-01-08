import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./Navbar.css"
import { Link } from "react-router-dom"
import { getItemByCategory } from '../../products'
import { useEffect } from 'react'


const Navbar = ( ) => {


    const [categorias, setCategorias] = React.useState([])

    useEffect (() => {
        getItemByCategory().then(categorias => {
            setCategorias(categorias)
        })
    }, [])
   
    console.log("estas son las categorias" + categorias)


    return (

            <header className="contenedor-header">

                <div className="contenedor-logo">
                <img src={require("../../assest/logo.png").default} className="logo" />
                </div>

                <div className="contenedor-incio">
                   <Link to={"/"} className="botones-menu">Inicio</Link>
                </div>

                <div className="contenedor-navbar">
                   {categorias.map(cat => <Link key={cat.id} className='link' to={`/categoria/${cat.id}`}>{cat.description}</Link>)}
                </div>
                
                <CartWidget />
                <div>
                    <button className="botones-menu">Login</button>
                </div>

            </header>
    )
}

export default Navbar



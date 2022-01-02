const productos = 
[
    {
        id:"1",
        categoria: "Hamburguesas",
        name:"Hamburguesa con queso",
        description:"Hamburguesa completa con doble carne, lechuga, cebolla, queso cheddar y gurmet",
        img:"https://www.hola.com/imagenes/cocina/noticiaslibros/20210528190401/dia-internacional-hamburguesa-recetas-2021/0-957-455/adobe-burger-1-a.jpg",
        precio:" $ 950 ",
        stock: 5,
    },
    {
        id:"2",
        categoria: "Empanadas",
        name:"Empanadas de carne",
        description:"Empanada de carne suave picada",
        img:"https://comidasparaguayas.com/wp-content/uploads/2019/11/empanada-de-carne-paraguaya_700x465.jpg",
        precio:" $ 950 ",
        stock: 5,
    },
    {
        id:"3",
        categoria: "Pizza",
        name:"Muzarella",
        description:"Pizza a la piedra con salsa de tomate y queso muzarella",
        img:"https://saboresmendoza.com/wp-content/uploads/2019/09/pizza-de-muzzarella.jpg",
        precio:" $ 950 ",
        stock: 5,
    },
    {
        id:"4",
        categoria: "Pizza",
        name:"Fugazzeta",
        description:"Pizza a la piedra con salsa de tomate, queso muzarella y cebolla",
        img:"https://img-global.cpcdn.com/recipes/6bc24e2204fc621f/1200x630cq70/photo.jpg",
        precio:" $ 950 ",
        stock: 5,
    },    
    {
        id:"5",
        categoria: "Hamburguesas",
        name:"Hamburguesa Completa",
        description:"Hamburguesa completa con doble carne, lechuga, cebolla caramelizada, doble queso cheddar y panceta",
        img:"https://static.vix.com/es/sites/default/files/styles/1x1/public/imj/elgranchef/%20Como-hacer-una-clasica-hamburguesa-americana-1.jpg",
        precio:" $ 950 ",
        stock: 5,
    },
    {
        id:"6",
        categoria: "Empanadas",
        name:"Empanada de pollo",
        description:"Empanada de pollo al horno con masa criolla",
        img:"https://www.laylita.com/recetas/wp-content/uploads/Receta-de-empanadas-de-pollo-o-pavo.jpg",
        precio:" $ 950 ",
        stock: 5,
    },
    
]

const categorias = [
    {id:'Hamburguesas', description:"Hamburguesas"},
    {id:'Empanadas', description:"Empanadas"},
    {id:'Pizza', description:"Pizza"},
]

export const getItemByCategory = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categorias)
        }, 1000)
    })
}


export const getProducts = (categoria) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            categoria ? resolve(productos.filter(producto => producto.categoria === categoria)) : resolve(productos)
        }, 1000)
    })
}


export const getProductById = (id) => {
    return new Promise((resolve) => {
        const product = productos.find(prod => parseInt(prod.id) === parseInt(id));
        setTimeout(() => resolve(product), 1000);
    });
}

export const getItem = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos[0]);
        }, 1000);
    });
};



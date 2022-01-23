
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



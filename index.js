import operations from './operations'

//Añadiendo un articulo
operations.add({
    name:'Sarten'
})

//Eliminando el primer articulo
operations.remove(1)

//Imprimir todos los articulos
console.log(operations.getAll())
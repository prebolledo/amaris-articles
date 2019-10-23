function sumar(a, b){
    return a + b
}

const sumar2 = function(a, b){
    return a + b
}

const sumar3 = (a,b) => a + b
const sumar4 = (a,b) => {
    ++a
    return a + b
}

const suma10AlValor = a => a + 10


const sumarCallback = (a, otroValorCallback) => {
    const suma = a + otroValorCallback(a)
    return suma
}

const callback1 =  a => a / 2

const result1 = sumarCallback(10,callback1)

console.log(result1)


console.log(sumarCallback(10,(a) => {
    return a * 3
}))


/*
console.log(sumar(1,3))
console.log(sumar2(2,3))
console.log(sumar3(3,3))
console.log(sumar3(4,3))
console.log(sumar4(4,3))
console.log(suma10AlValor(5))
*/
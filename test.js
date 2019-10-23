let name = 'Pablo Rebolledo'
let age = 35
let hello = 'Hola ' + name +' tienes '+age+' años'
let hello2 = `Hola ${name} tienes ${age + 1} años`
console.log(hello)
console.log(hello2)

const PI = 3.14

const names = []
names.push('Pedro')
names.push('Juan')
names.push(18)

const person = {
    name: 'Pablo',
    age: 35,
    parents:{
        mother:'My Mama',
        pather:'My Papa'
    }
}

const {...person2} = person
person2.name = 'Pedro'
console.log(person2)

{
    let { age,name } = person
    console.log(age)
    console.log(name)
}

console.log(name)


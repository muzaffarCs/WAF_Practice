// import {PI, add, display} from './index.js'

// console.log(PI)
// console.log(add(2, 3))
// console.log(display("John"))


// import * as object from './index.js'

// console.log(object.PI)
// console.log(object.add(2, 3))
// console.log(object.display("John"))


import {PI, add, data, arrayofobj, Car} from './index.js'
import Myobj from './index.js'    // export default function display(name) { return name } we can import it with any name we want

arrayofobj.forEach(obj => {
    console.log(obj.name)
})

console.log(PI)
console.log(add(2, 3))
console.log(Myobj("John"))
console.log(data.name)

const objCar = new Car("Toyota", 2020)
console.log(objCar.output())

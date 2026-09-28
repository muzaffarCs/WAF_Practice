export class Car{
    constructor(model, year){
    this.model = model;
    this.year = year;
    }

    output(){
        return `Car model is ${this.model} and year is ${this.year}`
    }
}


export default function display(name) {
    return name
}

export const PI = 3.14159

export function add(x, y) {
    return x + y
}

export const data ={
    name: "Muzaffar Ali",
    id: 3
};

export const arrayofobj =[{
    name: "Junaid",
    id: 3
},
{
    name: "Ali",
    id: 4
},
{
    name: "Muzaffar",
    id: 5
}
];
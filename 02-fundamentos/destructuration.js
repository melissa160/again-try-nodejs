let deadpool = {
    nombre: 'wade',
    apellido: 'gaston',
    poder: 'regeneracion',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}

// con ES6
// let deadpool = {
//     nombre: 'wade',
//     apellido: 'gaston',
//     poder: 'regeneracion',
//     getNombre() {
//         return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
//     }
// }

// let { nombre, apellido, poder } = deadpool

let { nombre: nuevoNombre, apellido: nuevoApellido, poder } = deadpool

console.log(nuevoNombre, nuevoApellido, poder);
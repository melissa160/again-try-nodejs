//simulacion de DB

let empleados = [{
    id: 1,
    nombre: 'uno'
}, {
    id: 2,
    nombre: 'dos'
}, {
    id: 3,
    nombre: 'tres'
}];

salarios = [{
    id: 1,
    salario: 2444
}, {
    id: 2,
    salario: 35555
}];

// 1. funcion con promesas normalita
// let getEmpleado = (id) => {


//     return new Promise((resolve, reject) => {
//         let empleadoDB = empleados.find(empleado => empleado.id === id)
//         if (!empleadoDB) {
//             reject(`No existe un empleado con el ID ${id}`)
//         } else {
//             resolve(empleadoDB);
//         }
//     });
// }

//1. reescribir la  misma funcion con async
let getEmpleado = async(id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)
    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${id}`)
    } else {
        return empleadoDB;
    }
}

// 2. funcion con promesas normalita
// let getSalario = (empleado) => {
//     return new Promise((resolve, reject) => {
//         let salarioDB = salarios.find((salario) => { return salario.id === empleado.id })

//         if (!salarioDB) {
//             reject(`No se encontro el salario para el usuario ${empleado.nombre}`)
//         } else {
//             resolve({
//                 nombre: empleado.nombre,
//                 salario: salarioDB.salario,
//                 id: empleado.id
//             })
//         }
//     });
// }

// 2. reescribir la funcion anterior con async
let getSalario = async(empleado) => {
    let salarioDB = salarios.find((salario) => { return salario.id === empleado.id });
    if (!salarioDB) {
        throw new Error(`No se encontro el salario para el usuario ${empleado.nombre}`)
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        }
    }


};


let getInformacion = async(id) => {

    let empleado = await getEmpleado(id);
    let respuest = await getSalario(empleado);

    return `${empleado.nombre} tiene un salario de ${respuest.salario}&`

};
getInformacion(30)
    .then(msj => console.log(msj))
    .catch(err => console.log(err))
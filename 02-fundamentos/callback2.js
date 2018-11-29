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


let getEmpleado = (id, calvo) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)
    if (!empleadoDB) {
        calvo(`No existe un empleado con el ID ${id}`)
    } else {
        calvo(null, empleadoDB);
    }
}

let getSalario = (empleado, calvo) => {
    let salarioDB = salarios.find(salario => { salario.id === empleado.id })

    if (!salarioDB) {
        calvo(`No se encontro un salario para el usuario ${empleado.nombre}`)
    } else {
        calvo(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        })
    }
}

// let getSalario = (empleado, calvo) => {
//     let salarioDB = salarios.find(salario => salario.id === empleado.id)
//     if (!salarioDB) {
//         calvo(`No se encontro un salario para el usuario ${empleado.nombre}`)
//     } else {
//         calvo(null, salario)
//     }
// }

// let empleadoDos = getEmpleado(2, (err, empleado) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(empleado);
//     empleado;
// });

// console.log(empleadoDos, 'aoueuouou');

// getSalario(empleadoDos, (err, salario) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(salario);
// });
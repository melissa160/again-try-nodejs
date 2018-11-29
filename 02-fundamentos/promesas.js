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

let getEmpleado = (id) => {


    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id)
        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`)
        } else {
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find((salario) => { return salario.id === empleado.id })

        if (!salarioDB) {
            reject(`No se encontro el salario para el usuario ${empleado.nombre}`)
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            })
        }
    });
}



getEmpleado(3).then(empleado => {
    // console.log('Empleado de BD', empleado);

    getSalario(empleado).then(salario => {
        console.log('El salario es', salario);
    }, err => {
        console.log(err);
    })
}, err => {
    console.log(err);
});

// getSalario(empleados[1]).then(salario => {
//     console.log('El salario es', salario);
// }, err => {
//     console.log(err);
// });
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



getEmpleado(10).then(empleado => {
        return getSalario(empleado);
    })
    .then(resp => {
        console.log(`el salario de ${resp.nombre} es ed ${resp.salario}`);
    })
    .catch(err => {
        console.log(err);
    });
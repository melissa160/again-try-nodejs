/**
 * Async Await
 */

//1. ejemplo de async
// let getNombre = async() => {
//     return 'fernando';
// }

//1. esto es lo que esta pasando cuando se invoca el async()
// let getNombre = () => {
//     return new Promise((resolve, reject) => {
//         resolve('fernando');
//     });
// }

// 2. manejando el async
// let getNombre = async() => {
//     throw new Error('No se encuentra el nombre')
//     return 'fernando';
// }

// getNombre().then(nombre => {
//         console.log(nombre);
//     })
//     .catch(e => {
//         console.log('Error en async', e);
//     })

// 3. await
let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('fernando');
        }, 3000)

    });
}

let saludo = async() => {
    let nombre = await getNombre()

    return `Hola ${nombre}`
}


saludo().then(msj => { console.log(msj); })



// getNombre().then(nombre => {
//         console.log(nombre);
//     })
//     .catch(e => {
//         console.log('Error en async', e);
//     })
// setTimeout(() => {
//     console.log('hola mundo');
// }, 3000);

let getUsuarioById = (id, calvo) => {
    let usuario = {
        nombre: 'fernando',
        id
    }

    calvo(usuario);
}

let usuario = {
    nombre: 'maria p',
    id: 24
}
getUsuarioById(10, (bol) => {
    console.log('usuario de based de datos', bol);
});
const usuarioAtenticado = new Promise( (resolve, reject) => {
    const auth = true;

    if(auth) {
        resolve('Usuario Autentificado');// EL PROMISE SE CUMPLE
    }else {
        reject('No se pudo iniciar sesión');// EL PROMISE NO SE CUMPLE
    }
});

usuarioAtenticado
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error))

    // En los Promise existen 3 valores;
    // Pending: No se ha cumplido pero tampoco se ha rechazado.
    // Fulfilled: Ya se ha cumplido.
    // Reject: Se ha rechazado o no se pudo cumplir.
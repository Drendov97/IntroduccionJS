const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = true;

    if (auth) {
        resolve('Usuario Autenticado'); // El Promise se cumple
    } else {
        reject('No se pudo iniciar sesión'); // El Promise no se cumple
    }
});

usuarioAutenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))
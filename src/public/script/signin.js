const formRegistro = document.getElementById('registro');

formRegistro.addEventListener('submit', (evento) => {
    evento.preventDefault();

    //Captura de campos del formulario
    let campoEmail = document.getElementById('email').value;
    let campoPassword = document.getElementById('password').value;

    //Crear objeto JSON
    let datos = { "email": campoEmail, "password": campoPassword };
    let datosJson = JSON.stringify(datos);

    fetch('http://localhost:3000/signin', {
        method: "POST",
        body: datosJson
    }).then(resultado => {
        if (resultado.status != 200) {
            Swal.fire({
                icon: "error",
                title: "¡No te has podido registrar!",
                text: "El email que estás utilizando, ya se encuentra registrado.",
            });
        } else {
            Swal.fire({
                title: "¡Registrado!",
                text: "Te has registrado exitosamente.",
                icon: "success"
            });
        }
    });
});
const formLogin = document.getElementById('ingreso');
const btnIngresar = document.getElementById('ingresar');


btnIngresar.addEventListener('click', (evento) => {
    evento.preventDefault();

    //Captura de campos del formulario
    let campoCorreo = document.getElementById('email').value;
    let campoPassword = document.getElementById('password').value;

    //Crear objeto JSON
    let datos = { "email": campoCorreo, "password": campoPassword };
    let datosJson = JSON.stringify(datos);

    fetch('http://localhost:3000/login', {
        method: "POST",
        body: datosJson
    }).then(resultado => {
        if (resultado.status != 200) {
            Swal.fire({
                icon: "error",
                title: "¡No has podido ingresar!",
                text: "Revisa tus credenciales o regístrate.",
            });
        } else {
            location.href = 'http://localhost:3000/tienda';
        }
    });
});
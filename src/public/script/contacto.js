const formContacto = document.getElementById('contactar');
const btnEnviar = document.getElementById('enviar');
btnEnviar.addEventListener('click', enviar);

formContacto.addEventListener('submit', (evento) => {
    evento.preventDefault();

    //Captura de campos del formulario
    let campoNombre = document.getElementById('nombre').value;
    let campoCorreo = document.getElementById('email').value;
    let campoMensaje = document.getElementById('mensaje').value;

    //Crear objeto JSON
    let datos = { "nombre": campoNombre, "correo": campoCorreo, "mensaje": campoMensaje };
    let datosJson = JSON.stringify(datos);

    fetch('http://localhost:3000/contacto', {
        method: "POST",
        body: datosJson
    });
});

function enviar() {
    Swal.fire({
        title: "¡Mensaje enviado!",
        text: "Tu mensaje ha sido enviado exitosamente.",
        icon: "success"
    });
}
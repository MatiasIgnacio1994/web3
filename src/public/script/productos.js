const btnBateria = document.getElementById("bateria").addEventListener('click', (evento) => {
    evento.preventDefault();
    //Crea campos
    let nombreProducto = "Batería eléctrica";
    let precioProducto = 519990;
    //Crear objeto JSON
    let datos = { "nombre": nombreProducto, "precio": precioProducto };
    let datosJson = JSON.stringify(datos);
    //
    fetch('http://localhost:3000/tienda', {
        method: "POST",
        body: datosJson
    }).then(resultado => {
        location.reload();
    });
});

const btnGuitarra = document.getElementById("guitarra").addEventListener('click', (evento) => {
    evento.preventDefault();
    //Crea campos
    let nombreProducto = "Guitarra eléctrica";
    let precioProducto = 599990;
    //Crear objeto JSON
    let datos = { "nombre": nombreProducto, "precio": precioProducto };
    let datosJson = JSON.stringify(datos);
    //
    fetch('http://localhost:3000/tienda', {
        method: "POST",
        body: datosJson
    }).then(resultado => {
        location.reload();
    });
});
const btnMicrofono = document.getElementById("microfono").addEventListener('click', (evento) => {
    evento.preventDefault();
    //Crea campos
    let nombreProducto = "Micrófono";
    let precioProducto = 79000;
    //Crear objeto JSON
    let datos = { "nombre": nombreProducto, "precio": precioProducto };
    let datosJson = JSON.stringify(datos);
    //
    fetch('http://localhost:3000/tienda', {
        method: "POST",
        body: datosJson
    }).then(resultado => {
        location.reload();
    });
});
const btnParlante = document.getElementById("parlante").addEventListener('click', (evento) => {
    evento.preventDefault();
    //Crea campos
    let nombreProducto = "Parlante";
    let precioProducto = 139840;
    //Crear objeto JSON
    let datos = { "nombre": nombreProducto, "precio": precioProducto };
    let datosJson = JSON.stringify(datos);
    //
    fetch('http://localhost:3000/tienda', {
        method: "POST",
        body: datosJson
    }).then(resultado => {
        location.reload();
    });
});
const btnTeclado = document.getElementById("teclado").addEventListener('click', (evento) => {
    evento.preventDefault();
    //Crea campos
    let nombreProducto = "Teclado";
    let precioProducto = 279990;
    //Crear objeto JSON
    let datos = { "nombre": nombreProducto, "precio": precioProducto };
    let datosJson = JSON.stringify(datos);
    //
    fetch('http://localhost:3000/tienda', {
        method: "POST",
        body: datosJson
    }).then(resultado => {
        location.reload();
    });
});

const btnTrombon = document.getElementById("trombon").addEventListener('click', (evento) => {
    evento.preventDefault();
    //Crea campos
    let nombreProducto = "Trombon";
    let precioProducto = 399990;
    //Crear objeto JSON
    let datos = { "nombre": nombreProducto, "precio": precioProducto };
    let datosJson = JSON.stringify(datos);
    //
    fetch('http://localhost:3000/tienda', {
        method: "POST",
        body: datosJson
    }).then(resultado => {
        location.reload();
    });
});
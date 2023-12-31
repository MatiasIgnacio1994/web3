const { json } = require("express");
const Stripe = require('stripe');
const stripe = new Stripe('sk_test_51OSYQrAN2Gcd6CRsR9osJZWmC2rFk1QMcFnqeg2J3JCphiQQm7ZIfdgGLJ1xXEZH6m7C7IjJXR96kXMMdHZPuCsu00QkyApFGN');

module.exports = (app) => {
    //Arreglos vacios para guardar datos
    let transacciones = [];
    let mensajes = [];
    let usuarios = [];
    let sesionActual = [];

    //Ruta Inicio
    app.get('/', (req, res) => {
        if (sesion(sesionActual)) {
            res.render('index', { cont: "Logout", ruta: "/logout" });
        } else {
            res.render('index', { cont: "Login", ruta: "/login" });
        }
    });

    //Ruta Nostros
    app.get('/nosotros', (req, res) => {
        if (sesion(sesionActual)) {
            res.render('nosotros', { cont: "Logout", ruta: "/logout" });
        } else {
            res.render('nosotros', { cont: "Login", ruta: "/login" });
        }
    });

    //Ruta Tienda
    app.get('/tienda', (req, res) => {
        if (sesion(sesionActual)) {
            res.render('tienda', { cont: "Logout", ruta: "/logout", cant: transacciones.length, link: "/tienda" });
        } else {
            res.render('login', { cont: "Login", ruta: "/login", cant: transacciones.length, link: "/tienda" });
        }
    });

    app.get('/tienda', (req, res) => {
        res.send(JSON.stringify(sesionActual));
    });
    app.get('/tienda', (req, res) => {
        res.send(JSON.stringify(transacciones));
    });

    app.post('/tienda', (req, res) => {
        let datos = req.body;
        transacciones.push(datos);
        res.render('tienda', { cont: "Logout", ruta: "/logout", cant: transacciones.length, link: "/tienda" });
        console.log(transacciones);
    });

    //Ruta Contacto
    app.get('/contacto', (req, res) => {
        if (sesion(sesionActual)) {
            res.render('contacto', { cont: "Logout", ruta: "/logout" });
        } else {
            res.render('contacto', { cont: "Login", ruta: "/login" });
        }
    });

    app.get('/contacto', (req, res) => {
        res.send(JSON.stringify(mensajes));
    });

    app.post('/contacto', (req, res) => {
        let datos = req.body;
        mensajes.push(datos);
        console.log(JSON.stringify(mensajes));
    });

    //Ruta Login
    app.get('/login', (req, res) => {
        if (sesion(sesionActual)) {
            res.render('login', { cont: "Logout", ruta: "/logout" });
        } else {
            res.render('login', { cont: "Login", ruta: "/login" });
        }
    });

    app.get('/login', (req, res) => {
        res.send(JSON.stringify(usuarios));
    });

    app.post('/login', (req, res) => {
        let datos = req.body;

        if (usuarios.length == 0) {
            res.sendStatus(409);
            console.log(JSON.stringify(usuarios));
            return;
        }

        for (let i = 0; i < usuarios.length; i++) {
            if (JSON.stringify(usuarios[i]["email"]) === JSON.stringify(datos["email"])
                && JSON.stringify(usuarios[i]["password"]) === JSON.stringify(datos["password"])) {
                //Enviar respuesta positiva al front
                sesionActual.push(datos);
                res.send();
                console.log("LOGEADO");
            } else {
                console.log("ENTRE AL ERROR DE LOGEO");
                res.status(409);
                res.send();
                console.log("NO SE PUDO LOGEAR!!!");
            }
        }
        console.log(JSON.stringify(usuarios));
    });

    //Ruta Signin
    app.get('/signin', (req, res) => {
        if (sesion(sesionActual)) {
            res.render('signin', { cont: "Logout", ruta: "/logout" });
        } else {
            res.render('signin', { cont: "Login", ruta: "/login" });
        }
    });

    app.get('/signin', (req, res) => {
        res.send(JSON.stringify(usuarios));
    });

    app.post('/signin', (req, res) => {
        let datos = req.body;

        if (usuarios.length == 0) {
            usuarios.push(datos);
            res.sendStatus(200);
        } else {
            for (let i = 0; i < usuarios.length; i++) {
                if (JSON.stringify(usuarios[i]["email"]) === JSON.stringify(datos["email"])) {
                    //Enviar respuesta negativa al front
                    res.sendStatus(409);
                    return;
                }
            }
            usuarios.push(datos);
        }
        console.log(JSON.stringify(usuarios));
    });

    //Ruta Logout
    app.get('/logout', (req, res) => {
        if (sesion(sesionActual)) {
            sesionActual = [];
            transacciones = [];
            res.render('index', { cont: "Login", ruta: "/login" });
        }
    });

    //Ruta Carrito
    app.get('/carrito', (req, res) => {
        if (sesion(sesionActual)) {
            res.render('carrito', { cont: "Logout", ruta: "/logout", transacciones: transacciones });
        } else {
            res.render('carrito', { cont: "Login", ruta: "/login", transacciones: transacciones });
        }
    });

    //STRIPE
    app.post('/create-checkout-session', async (req, res) => {
        //let trans = req.body;
        const s = await stripe.checkout.sessions.create({
            line_items: [{
                price_data: {
                    product_data: {
                        name: 'nombre',
                        description: 'descripcion'
                    },
                    currency: "usd",
                    unit_amount: 1200
                },
                quantity: 1,
            }],
            mode: 'payment',
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel'
        });
        console.log("************* SESSION *************");
        console. log(s);
        console.log(transacciones);
        return res.json(s);
    });

    app.get("/success", (req, res) => {
        res.send("Transacción exitosa");
    });

    app.get("/cancel", (req, res) => {
        res.send("Transacción cancel");
    });

    //Funciones de utilidad
    function sesion(sesionActual) {
        let estaOk = false;
        if (sesionActual.length > 0) {
            estaOk = true;
            return estaOk
        } else {
            return estaOk;
        }
    }

    function productos(transacciones) {
        let estaOk = false;
        if (transacciones.length > 0) {
            estaOk = true;
            return estaOk;
        } else {
            return estaOk;
        }
    }
}
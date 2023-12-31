const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

//Configuraciones del servidor
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ type: "*/*" }));
app.use(cors());
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); //Motor de plantillas

//Rutas
require('./app/routes')(app);

//Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//Inicialización del servidor
app.listen(app.get('port'), () => {
    console.log('App inicializada en puerto: ', app.get('port'));
});
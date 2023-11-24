const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Servidor ejecutandose en http://localhost:' + port);
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
});

app.get('/descripcion-rutas', (req, res) => {
    res.sendFile(path.join(__dirname, './views/descrip-rutas.html'));
});

app.get('/rutas-metrocable', (req, res) => {
    res.sendFile(path.join(__dirname, './views/rutas-m-cable.html'));
});

app.get('/rutas-metro', (req, res) => {
    res.sendFile(path.join(__dirname, './views/rutas-metro.html'));
});

app.get('/horarios', (req, res) => {
    res.sendFile(path.join(__dirname, './views/horarios.html'));
});

app.get('/estaciones', (req, res) => {
    res.sendFile(path.join(__dirname, './views/estaciones.html'));
});

app.get('/mapa', (req, res) => {
    res.sendFile(path.join(__dirname, './views/mapa.html'));
});

const sequelize = require('./config/database');
const express = require('express');
//const { Item, Category } = require('./models');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3030;

app.use(cors({
    origin: 'http://localhost:3001', 
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));

app.use(express.json());

const path = require('path'); 

app.use('/assets/images', express.static(path.join(__dirname, 'src/assets/images')));


app.use('/api', require('./routes')); 

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión a base de datos exitosa.');
    } catch (error) {
        console.error('Error de conexión a la base de datos:', error);
    }

    try {
        await sequelize.sync({ alter: false });
        console.log('Los modelos han sido sincronizados y las tablas han sido actualizadas.');
    } catch (error) {
        console.error('Error al sincronizar modelos:', error);
    }

    app.listen(port, () => {
        console.log("Server en " + port)
    });
})();

const sequelize = require('./config/database');
const express = require('express');
const { Item, Category } = require('./models');
const cors = require('cors');

const app = express();
const port = 3030;

app.use(cors({
    origin: 'http://localhost:3001', 
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));

app.use(express.json());

// Las rutas deben venir después de la configuración de CORS
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

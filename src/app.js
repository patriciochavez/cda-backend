const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

//configuración
app.set('port', process.env.PORT || 4000);

//middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//rutas
app.use('/api/users', require('./routes/users'));
app.use('/api/products', require('./routes/products'));

module.exports = app;
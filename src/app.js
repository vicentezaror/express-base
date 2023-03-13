const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config;
const routes =  require('./routes');
const {
    logErrors,
    ormErrorHandler,
    boomErrorHandler,
    errorHandler
} = require('./middlewares/error.handler');


const app = express();

const NODE_ENV = process.env.NODE_ENV || 'dev';

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

const ALLOWED_ORIGINS =
    process.env.ALLLOWED_ORIGINS?.split(',')
    || ['http://localhost:3000'];

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || ALLOWED_ORIGINS.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Origin not allowed by CORS'));
        }
    },
    allowedHeaders: ['Content-Type', 'Authorization'],
    maxAge: 86400,
};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(routes);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(ormErrorHandler);
app.use(errorHandler);

module.exports = app;
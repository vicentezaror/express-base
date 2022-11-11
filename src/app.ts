import express, { Router } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import { config } from 'dotenv';
// import { router } from './routes/index.js';
// import {
//     logErrors,
//     ormErrorHandler,
//     boomErrorHandler,
//     errorHandler
// } from './src/middlewares/error.handler';


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
    origin: (origin: any, callback: any) => {
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

app.use('/test', (req, res) => {
    res.send('Hello World!');
});

// router(app);

// app.use(logErrors);
// app.use(ormErrorHandler);
// app.use(boomErrorHandler);
// app.use(errorHandler);

export default app;
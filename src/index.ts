import app from './app';

const NODE_ENV = process.env.NODE_ENV || 'dev';
const HOST = NODE_ENV === 'dev' ? 'localhost' : process.env.HOST;
const PORT = process.env.PORT || 3001;

app.listen(process.env.PORT || 3001, () => {
    console.log(`[${NODE_ENV}] Server running at http://${HOST}:${PORT}`);
    }
);

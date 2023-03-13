const app = require('./app');
const db = require('./db/models/index.js');

const NODE_ENV = process.env.NODE_ENV || 'dev';
const HOST = NODE_ENV === 'dev' ? 'localhost' : process.env.HOST;
const PORT = process.env.PORT || 3001;

db.sequelize.authenticate().then(
    () => {
        console.log('Connection has been established successfully.');
        app.listen(process.env.PORT || 3001, () => {
            console.log(`[${NODE_ENV}] Server running at http://${HOST}:${PORT}`);
        });
    }
).catch(err => {
    console.error('Unable to connect to the database:', err);
});


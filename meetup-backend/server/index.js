import express from 'express';
import dbConfig from './config/db';
import middlewaresConfig from './config/middlewares';
import { MeetupRoutes, GroupRoutes } from './modules';

const app = express();

/**
 * Database
 */
dbConfig();
/**
 * Middlewares
 */
middlewaresConfig(app);

//Массив роутов
app.use('/api', [MeetupRoutes, GroupRoutes]);

const PORT = process.env.PORT || 3000;

//Слушает соединения на Порте
app.listen(PORT, err => {
    if (err) {
        console.error(err);
    } else {
        console.log(`App listen to port ${PORT}`);
    }
});

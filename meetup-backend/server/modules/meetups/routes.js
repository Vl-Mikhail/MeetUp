import { Router } from 'express';
import * as MeetupController from './controller';

const routes = new Router();

/**
 *  Отвечает на клиентский запрос (PATH - путь на сервере, METHOD - метод запроса HTTP)
 */
routes.post('/meetups', MeetupController.createMeetup);
routes.get('/meetups', MeetupController.getAllMeetups);

export default routes;

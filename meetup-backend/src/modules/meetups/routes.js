import { Router } from 'express';
import * as MeetupController from './controller';
import { requireJwtAuth } from '../../utils/requireJwtAuth';

const routes = new Router();

/**
 *  Отвечает на клиентский запрос (PATH - путь на сервере, METHOD - метод запроса HTTP)
 */
routes.post('/meetups', MeetupController.createMeetup);
routes.get('/meetups', requireJwtAuth, MeetupController.getAllMeetups);

export default routes;

/* eslint-disable no-console */
import mongoose from 'mongoose';

import config from './config';

/**
 * Создаем подключение и открываем его
 */
export default () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(config.DB_URL);
  mongoose.set('debug', true);
  mongoose.connection
    .once('open', () => console.log('Mongodb running'))
    .on('error', err => console.error(err));
};

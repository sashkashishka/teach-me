import logInRouter from './api/log-in';
import logOutRouter from './api/log-out';
import pingRouter from './ping/ping';
import scheduleRouter from './api/schedule';

export default [
  logInRouter,
  logOutRouter,
  pingRouter,
  scheduleRouter,
];

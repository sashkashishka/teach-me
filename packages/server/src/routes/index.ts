import logInRouter from './api/log-in';
import logOutRouter from './api/log-out';
import pingRouter from './ping/ping';
import scheduleRouter from './api/schedule';
import settingsRouter from './api/settings';
import sourcesRouter from './api/sources';
import tasksRouter from './api/tasks';
import sessionRouter from './api/session';

export default [
  logInRouter,
  logOutRouter,
  pingRouter,
  scheduleRouter,
  settingsRouter,
  sourcesRouter,
  tasksRouter,
  sessionRouter,
];

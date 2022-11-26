require('dotenv').config();

import express from 'express';
import config from 'config';
import { router } from './router';
import { connect } from '../config/db';
import { Logger } from '../config/logger';
import { morganMiddleware } from './middleware/morganMiddleware';

const app = express();
app.use(express.json());
app.use(morganMiddleware);
app.use(router);

const port = config.get<number>('port');

app.listen(port, async () => {
  await connect();
  Logger.info(`Server started on http://localhost:${port}`);
});

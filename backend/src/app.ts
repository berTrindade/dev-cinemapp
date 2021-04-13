import cors from 'cors';
import express from 'express';
import 'reflect-metadata';
import { serve, setup } from 'swagger-ui-express';
import createConnection from './database';
import swaggerConfig from './docs';
import { router } from './routes';

createConnection();
const app = express();

app.use(cors());
app.use('/docs', serve, setup(swaggerConfig));
app.use(express.json());
app.use(router);

export { app };

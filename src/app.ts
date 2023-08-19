import express from 'express';
import config from './config';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

const app = express();


// Settings
app.set('port', config.SERVER_PORT);

// Midllewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

export default app;

import morgan from 'morgan';
import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import testRoutes from './routes/test';
import compression from 'compression';

const app: Express = express();

app.use(morgan('combined'));
app.use(cors());

// gzip compression
app.use(compression());
app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '1mb' }));

const corsOptions = {
  maxAge: 7200,
  preflightContinue: false
}
app.use(cors(corsOptions));
app.use('/test', testRoutes);


app.set('view engine', 'ejs');

process
  .on('uncaughtException', (error) => {
    error.message.includes('[__EXIT__]') && process.exit(0);
  })
  .on('unhandledRejection', (error: Error) => {
    error.message.includes('[__EXIT__]') && process.exit(0);
  });

export default app;

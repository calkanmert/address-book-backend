import express, { Application, NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import config from './config';
import loaders from './loaders';
import routes from './routes';
import result from './utils/result';

config();
loaders();

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors({
  origin: '*',
  methods: '*',
}));


app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'welcome the address book api',
  });
});

app.use('/users', routes.userRoute);
app.use('/auth', routes.authRoute);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  result(res, 500, 'internal_server_error');
});

export default app;

import express, { Application, NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import config from './config';
import routes from './routes';

config();

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

app.listen(process.env.APP_PORT || 3000, () => {
  console.log('server started.');
});

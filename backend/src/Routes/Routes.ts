import { Router } from 'express';
import clientRoute from './clientRoute';

const routes = Router();

routes.use('/client', clientRoute);

export default routes;

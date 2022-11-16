import { Router } from 'express';
import ClientController from '../controllers/ClientController';

const route = Router();

const clientController = new ClientController();

route.post('/', clientController.create);

export default route;

import { Request, Response } from 'express';
// import IClient from '../interfaces/clients';
import ClientService from '../services/ClientService';
import 'express-async-errors';

export default class ClientController {
  private service: ClientService;

  constructor() {
    this.service = new ClientService();
  }

  public create = async (req: Request, res: Response) => {
    const { body: { name, email, password } } = req;
    const response = await this.service.create({ name, email, password });
    res.status(201).json(response);
  };
}

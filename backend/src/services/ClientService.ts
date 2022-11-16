import IClient from '../interfaces/clients';
import ClientODM from '../models/ClientModel';

export default class ClientService {
  private model: ClientODM;

  constructor() {
    this.model = new ClientODM();
  }

  public create = async (client: IClient) => {
    const newClient = await this.model.create(client);
    return newClient;
  }
}

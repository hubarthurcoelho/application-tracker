import IClient from '../interfaces/clients';
import ClientODM from '../models/ClientModel';

export default class ClientService {
  public create = async (client: IClient) => {
    const clientODM = new ClientODM();
    const newClient = await clientODM.create(client);
    return newClient;
  }
}

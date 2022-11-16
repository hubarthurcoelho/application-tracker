import { Schema, model, Model, models } from 'mongoose';
import IClient from '../interfaces/clients';

class ClientODM {
  private schema: Schema;
  private model: Model<IClient>;

  constructor() {
    this.schema = new Schema<IClient>({
      name: { type: String, required: true },
      email: { type: String, required: true },
      password: { type: String, required: true },
    });
    this.model = models.Client || model<IClient>('Client', this.schema);
  }

  public async create(client: IClient): Promise<IClient> {
    return this.model.create({ client });
  }
}

export default ClientODM;

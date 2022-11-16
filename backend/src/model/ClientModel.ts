import { Schema, model } from 'mongoose';

const clientSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const Client = model('Client', clientSchema);

export default Client;

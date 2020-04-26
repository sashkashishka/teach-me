import mongoose, { Document } from 'mongoose';

const { Schema } = mongoose;

export interface Client extends Document {
  login: string;
  name: string;
  active: boolean;
  stars: number;
  session?: string;
}

const ClientSchema = new Schema(
  {
    login: {
      type: String,
    },
    name: {
      type: String,
    },
    active: {
      type: Boolean,
    },
    stars: {
      type: Number,
    },
    session: {
      type: String,
    },
  },
);


export default mongoose.model<Client>('Clients', ClientSchema, 'clients');

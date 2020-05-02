import mongoose, { Document } from 'mongoose';

const { Schema } = mongoose;

export interface ScheduleTask {
  task: string;
  settings: number;
  source: number;
}

export interface Client extends Document {
  login: string;
  name: string;
  active: boolean;
  stars: number;
  session?: string;
  schedule: Array<Array<ScheduleTask>>;
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
    schedule: [[
      {
        tasks: {
          type: String,
        },
        settings: {
          type: Number,
        },
        source: {
          type: Number,
        },
      },
    ]],
  },
);

export default mongoose.model<Client>('Clients', ClientSchema, 'clients');

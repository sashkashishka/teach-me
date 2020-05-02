import mongoose, { Document } from 'mongoose';

const { Schema } = mongoose;

export interface Source {
  data: any;
}

export interface Sources extends Document {
  task: string;
  sources: Array<Source>;
}

const SourceSchema = new Schema(
  {
    task: {
      type: String,
    },
    sources: [Schema.Types.Mixed],
  },
);

export default mongoose.model<Sources>('Sources', SourceSchema, 'sources');


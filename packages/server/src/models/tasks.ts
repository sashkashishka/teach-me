import mongoose, { Document } from 'mongoose';

const { Schema } = mongoose;

export interface Task extends Document {
  name: string;
  component: string;
}

const TaskSchema = new Schema(
  {
    name: String,
    component: String,
  },
);

export default mongoose.model<Task>('Tasks', TaskSchema, 'tasks');

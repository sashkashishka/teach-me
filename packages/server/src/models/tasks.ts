import mongoose, { Document } from 'mongoose';

const { Schema } = mongoose;

export interface Task {
  path: string; // path to component
}

export interface Tasks extends Document {
  t: Task;
}

const TaskSchema = new Schema({
  t: {
    path: {
      type: String,
    },
  },
});

export default mongoose.model<Tasks>('Tasks', TaskSchema, 'tasks');

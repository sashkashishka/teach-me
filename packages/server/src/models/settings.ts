import mongoose, { Document } from 'mongoose';

const { Schema } = mongoose;

export interface Setting {
  [key: string]: any;
}

export interface Settings extends Document {
  task: string;
  settings: Array<Setting>;
}

const SettingSchema = new Schema(
  {
    task: {
      type: String,
    },
    settings: [Schema.Types.Mixed],
  },
);

export default mongoose.model<Settings>('Settings', SettingSchema, 'settings');

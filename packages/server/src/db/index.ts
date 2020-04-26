import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );

    if (process.env.NODE_ENV === 'dev') {
      console.log(111)
      mongoose.set('debug', true);
    }

    console.log('DB connected');
  } catch(e) {
    console.error(e);
    throw e;
  }
};

export default connectDB;

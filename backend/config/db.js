import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const { MONGO_USER, MONGO_PASS, MONGO_CLUSTER, MONGO_DB } = process.env;

const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_CLUSTER}/${MONGO_DB}?retryWrites=true&w=majority`;

export const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error);
    process.exit(1);
  }
};

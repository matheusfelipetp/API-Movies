import mongoose from 'mongoose';
import config from 'config';
import { Logger } from './logger';

export const connect = async () => {
  const dbUri = config.get<string>('dbUri');

  try {
    await mongoose.connect(dbUri);
    Logger.info('Connected to database');
  } catch (err) {
    Logger.error('Error connecting to database');
    Logger.error(`Error: ${err}`);
    process.exit(1);
  }
};

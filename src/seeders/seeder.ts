import env from 'dotenv';
import mongoose from 'mongoose';
import phoneTypes from './phoneTypes';
import emailTypes from './emailTypes';

const seeder = async () => {
  if (process.argv.pop() !== '-c') {
    await phoneTypes.create();
    await emailTypes.create();
  } else {
    await phoneTypes.delete();
    await emailTypes.delete();
  }
}

(async () => {
  env.config();
  mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
  await seeder();
  process.exit();
})();

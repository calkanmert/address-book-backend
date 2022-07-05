import mongoose from 'mongoose';
import UserModel, { IUser } from '../models/user.model';

const db = mongoose.connection;

db.once('open', () => {{
  console.log('db connection OK.');
}});

db.on('error', (err) => {
  console.log(err);
});

export default async () => {
  if (process.env.NODE_ENV == 'test') {
    await mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}-test`, function(){
      mongoose.connection.db.dropDatabase();
    });
    return;
  }
  await mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
}

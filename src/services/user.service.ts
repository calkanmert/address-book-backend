import { ObjectId } from 'mongoose';
import UserModel, { IUser } from '../models/user.model';

const getUserByEmail = async (email: string) => {
  return await UserModel.findOne({ email: email });
}

const getUserById = async (id: string) => {
  return await UserModel.findOne({ _id: id });
}

const createUser = async (user: IUser) => {
  return await new UserModel(user).save();
}

export default {
  getUserByEmail,
  getUserById,
  createUser,
}
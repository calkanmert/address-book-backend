import emailTypeModel from '../models/emailType.model';

const data = [
  {
    value: 'Personal',
  },
  {
    value: 'Business',
  }
];

export default {
  create: async () => {
    await emailTypeModel.insertMany(data);
  },
  delete: async () => {
    await emailTypeModel.deleteMany({});
  },
}

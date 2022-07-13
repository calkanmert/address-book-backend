import phoneTypeModel from '../models/phoneType.model';

const data = [
  {
    value: 'Mobile',
  },
  {
    value: 'Home',
  },
  {
    value: 'Office',
  },
  {
    value: 'Fax',
  },
  {
    value: 'Other',
  },
];

export default {
  create: async () => {
    await phoneTypeModel.insertMany(data);
  },
  delete: async () => {
    await phoneTypeModel.deleteMany({});
  }
}

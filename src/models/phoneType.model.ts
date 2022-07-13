import mongoose, { Schema } from 'mongoose';

export interface IPhoneType {
  value: string;
}

const PhoneTypeSchema: Schema = new Schema({
  value: {  
    type: String, 
    required: true, 
  },
}, { timestamps: true, versionKey: false });

export default mongoose.model<IPhoneType>('Phone_Type', PhoneTypeSchema);

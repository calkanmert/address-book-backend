import mongoose, { Schema } from 'mongoose';

export interface IEmailType {
  value: string;
}

const EmailTypeSchema: Schema = new Schema({
  value: {  
    type: String, 
    required: true, 
  },
}, { timestamps: true, versionKey: false });

export default mongoose.model<IEmailType>('Email_Type', EmailTypeSchema);

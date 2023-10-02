import { Schema, model } from 'mongoose';
import { IUser, IUserModel } from './user.interface';

const userSchema = new Schema<IUser, IUserModel>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);



export const User = model<IUser, IUserModel>('User', userSchema);

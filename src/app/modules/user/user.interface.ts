import { Model } from "mongoose";

export type IUser = {
  name: string;
  email: string;
};

export type IUserModel = Model<IUser, Record<string, unknown>>;

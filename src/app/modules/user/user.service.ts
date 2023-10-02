import { IUser } from './user.interface';
import { User } from './user.model';

const createUser = async (userData: IUser) => {
  const isExist = await User.findOne({ email: userData.email });

  if (!isExist) {
    const result = await User.create(userData);

    return result;
  } else {
    return isExist;
  }
};

export const UserService = {
  createUser,
};

import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { UserService } from './user.service';
import {
  IUser,
} from './user.interface';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await UserService.createUser(data);
  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully!',
    data: result,
  });
});

export const UserController = {
  createUser
};

import UserModel from '../models/client';
import { hashPassword } from '../util/password';

export const getUser = (req, res) => {
  res.json({
    name: 'renner',
    email: 'renner@gmail.com',
    cpf: '04447289105',
    tel: '6499295-4946',
    dateOfBirth: new Date(),
    company: 1,
    role: 'g',
    workload: 160,
  });
};

export const getUsers = async (req, res) => {
  //TODO buscar pela empresa do usuário
  const users = await UserModel.find().select(['-password']);

  res.json({
    users,
  });
};

export const createUser = async (req, res, next) => {
  const { body } = req;

  try {
    const passwordHashed = await hashPassword(body.password);

    const user = new UserModel({
      name: body.name,
      password: passwordHashed,
      email: body.email,
      company: body.companyId,
      cpf: body.cpf,
      tel: body.tel,
      dateOfBirth: body.dateOfBirth,
      role: body.role,
      workload: body.workload,
      enabled: true,
    });

    await user.save();

    res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
};

export const updateUser = (req, res) => {
  res.json({ status: 'ok' });
};

export const deleteUser = (req, res) => {
  res.json({ status: 'ok' });
};

export default {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};

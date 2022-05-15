import mongoose from 'mongoose';
import UserModel from '../models/user';
import { removeValueUndefinedOrNull } from '../util/object';
import { hashPassword } from '../util/password';

export const getUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Informe um id válido');
    }

    const user = await UserModel.findById(id).select(['-password']);

    if (!user || !user.enabled) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ user });
  } catch (error) {
    next(error);
  }
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
      companyId: body.companyId,
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

export const updateUser = async (req, res, next) => {
  const { body } = req;

  try {
    const bodyUpdate = removeValueUndefinedOrNull({
      name: body.name,
      password: body.password,
      tel: body.tel,
      workload: body.workload,
    });

    const user = await UserModel.findOneAndUpdate({ _id: body.id }, bodyUpdate);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'Successfully', user });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Informe um id válido');
    }

    const bodyUpdate = {
      enabled: false,
    };

    const user = await UserModel.findOneAndUpdate({ _id: id }, bodyUpdate);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'Successfully' });
  } catch (error) {
    next(error);
  }
};

export default {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};

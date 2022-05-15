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

    const user = await UserModel.findOne({
      _id: id,
      companyId: req.user.companyId,
    }).select(['-password']);

    if (!user || !user.enabled) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ user });
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res) => {
  const users = await UserModel.find({
    companyId: req.user.companyId,
  }).select(['-password']);

  res.json({
    users,
  });
};

export const createUser = async (req, res, next) => {
  const { body } = req;

  try {
    const passwordHashed = await hashPassword(body.password);

    const userAlreadyExists = await UserModel.findOne({
      $or: [{ email: body.email }, { cpf: body.cpf }],
    });

    if (userAlreadyExists) {
      throw new Error('Usuário já existente');
    }

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

  const passwordHashed = body.password
    ? await hashPassword(body.password)
    : null;

  try {
    const bodyUpdate = removeValueUndefinedOrNull({
      name: body.name,
      password: passwordHashed,
      tel: body.tel,
      workload: body.workload,
    });

    const user = await UserModel.findOneAndUpdate(
      { _id: body.id, companyId: req.user.companyId },
      bodyUpdate
    );

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    res.json({ message: 'Ação realizada com sucesso!' });
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
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    res.json({ message: 'Ação realizada com sucesso!' });
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

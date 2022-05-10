import UserModel from '../models/client';

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

export const getUsers = (req, res) => {
  res.json({
    users: [
      {
        name: 'renner',
        email: 'renner@gmail.com',
        cpf: '04447289105',
        tel: '6499295-4946',
        dateOfBirth: new Date(),
        company: 1,
        role: 'c',
        workload: 160,
      },
      {
        name: 'rafael',
        email: 'rafael@gmail.com',
        cpf: '487966215484',
        tel: '6499514-4946',
        dateOfBirth: new Date(),
        company: 1,
        role: 'c',
        workload: 160,
      },
      {
        name: 'renner',
        email: 'renner@gmail.com',
        cpf: '04447289105',
        tel: '6499295-4946',
        dateOfBirth: new Date(),
        company: 1,
        role: 'c',
        workload: 160,
      },
      {
        name: 'daniel',
        email: 'daniel@gmail.com',
        cpf: '54654665498',
        tel: '6499514-5878',
        dateOfBirth: new Date(),
        company: 1,
        role: 'c',
        workload: 160,
      },
    ],
  });
};

export const createUser = async (req, res,next) => {
  const {body} = req;
  
  try {
    const user = new UserModel({
      name: body.name,
      password: body.password,
      email: body.email,
      company: body.companyId,
      cpf: body.cpf,
      tel: body.tel,
      dateOfBirth: body.dateOfBirth,
      role: body.role,
      workload: body.workload,
      enabled: true
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

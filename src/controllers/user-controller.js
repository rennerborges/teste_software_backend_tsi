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

export const createUser = (req, res) => {
  res.status(201).json({ user: req.body });
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

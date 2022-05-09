export const getUser = (req, res) => {
  res.json({
    name: 'renner',
    email: 'renner@gmail.com',
    cpf: '04447289105',
    tel: '6499295-4946',
    dateOfBirth: new Date(),
    company: 1,
    role: 'g',
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
      },
      {
        name: 'rafael',
        email: 'rafael@gmail.com',
        cpf: '487966215484',
        tel: '6499514-4946',
        dateOfBirth: new Date(),
        company: 1,
        role: 'c',
      },
      {
        name: 'renner',
        email: 'renner@gmail.com',
        cpf: '04447289105',
        tel: '6499295-4946',
        dateOfBirth: new Date(),
        company: 1,
        role: 'c',
      },
      {
        name: 'daniel',
        email: 'daniel@gmail.com',
        cpf: '54654665498',
        tel: '6499514-5878',
        dateOfBirth: new Date(),
        company: 1,
        role: 'c',
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

export default {
  getUser,
  getUsers,
  createUser,
  updateUser,
};

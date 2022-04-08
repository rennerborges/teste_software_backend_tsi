export const getUser = (req, res) => {
  res.json({ status: 'Busca de Usuario Ok' });
};

export const getUsers = (req, res) => {
  res.json({ status: 'Busca de Usuarios Ok' });
};

export const createUser = (req, res) => {
  res.json({ status: 'ok' });
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

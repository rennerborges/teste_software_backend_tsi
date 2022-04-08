import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config({ path: './variables.env' });

export const login = (req, res) => {
  const {
    body: { user, password },
  } = req;

  if ((user === 'rafael' || user === 'renner') && password === '123') {
    const id = 1;
    var token = jwt.sign({ id, user, password }, process.env.SECRET, {
      expiresIn: 300, // expires in 5min
    });
    return res.status(200).json({ auth: true, token: token });
  }

  res.status(403).json({ auth: false, message: 'Credenciais inválidas' });
};

export default {
  login,
};

import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config({ path: './variables.env' });

export const login = (req, res) => {
  const {
    body: { user, password },
  } = req;

  if ((user === 'rafael' || user === 'renner') && password === '123') {
    const id = 1;
    var token = jwt.sign(
      { id, user, password, permision: user === 'rafael' ? 'c' : 'g' },
      process.env.SECRET,
      {
        expiresIn: 24 * 60 * 60, // expires in 24h
      }
    );
    return res.status(200).json({
      auth: true,
      token: token,
    });
  }

  res.status(401).json({ auth: false, message: 'Credenciais inválidas' });
};

export default {
  login,
};

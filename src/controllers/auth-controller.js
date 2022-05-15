import jwt from 'jsonwebtoken';
import UserModel from '../models/user';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import { hashPassword } from '../util/password';

dotenv.config({ path: './variables.env' });

export const login = async (req, res) => {
  const {
    body: { email, password },
  } = req;

  const userDatabase = await UserModel.findOne({
    email,
    enabled: true,
  });

  if (!userDatabase || !bcrypt.compareSync(password, userDatabase.password)) {
    return res
      .status(401)
      .json({ auth: false, message: 'Usuário e/ou senha inválidos' });
  }

  const bodyToken = {
    name: userDatabase.name,
    email: userDatabase.email,
    cpf: userDatabase.cpf,
    tel: userDatabase.tel,
    dateOfBirth: userDatabase.dateOfBirth,
    companyId: userDatabase.companyId,
    role: userDatabase.role,
    workload: userDatabase.workload,
  };

  const token = jwt.sign(bodyToken, process.env.SECRET, {
    expiresIn: 24 * 60 * 60, // expires in 24h
  });

  return res.status(200).json({
    auth: true,
    token: token,
  });
};

export default {
  login,
};

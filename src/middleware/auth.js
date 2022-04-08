import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config({ path: './variables.env' });

export function Auth(req, res, next) {
  var { token } = req.headers;

  if (!token)
    return res.status(401).json({ auth: false, message: 'No token provided.' });

  jwt.verify(token, process.env.SECRET, function (err, decoded) {
    if (err)
      return res
        .status(500)
        .json({ auth: false, message: 'Failed to authenticate token.' });

    // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id;
    next();
  });
}

export default {
  Auth,
};

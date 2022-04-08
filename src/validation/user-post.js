import * as yup from 'yup';
import { isValidCpf } from '../util/cpf';

const ValidationUserPost = (req, res, next) => {
  let schema = yup.object().shape({
    name: yup.string().required('O nome é necessário'),
    tel: yup.string().required('O telefone é necessário'),
    cpf: yup
      .string()
      .required('O CPF é necessário')
      .test('is-cpf', 'Informe um CPF válido', (value) => isValidCpf(value)),
    email: yup.string().email().required('O e-mail é necessário'),
    dateOfBirth: yup.date().required('A data de nascimento é necessária'),
  });

  schema
    .validate(req.body)
    .then(function (valid) {
      next();
    })
    .catch((error) => next(error));
};

export default ValidationUserPost;

import * as yup from 'yup';
import { isValidCpf } from '../util/cpf';
import { isValidTel } from '../util/tel';

const ValidationUserPost = (req, res, next) => {
  const schema = yup.object().shape({
    name: yup.string().required('O nome é necessário'),
    tel: yup
      .string()
      .required('O telefone é necessário')
      .test('is-tel', 'É necessário informar um telefone válido', (value) =>
        isValidTel(value)
      ),
    cpf: yup
      .string()
      .required('O CPF é necessário')
      .test('is-cpf', 'Informe um CPF válido', (value) => isValidCpf(value)),
    email: yup.string().email().required('O e-mail é necessário'),
    dateOfBirth: yup.date().required('A data de nascimento é necessária'),
    companyId: yup.string().required('O id da empresa é necessário'),
  });

  return schema
    .validate(req.body)
    .then(() => next())
    .catch((error) => next(error));
};

export default ValidationUserPost;

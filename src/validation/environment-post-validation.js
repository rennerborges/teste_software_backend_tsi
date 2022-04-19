import * as yup from 'yup';
import { isValidCnpj } from '../util/cnpj';

const ValidationEnvironmentPost = (req, res, next) => {
  const schema = yup.object().shape({
    fantasyName: yup.string().required('O nome fantasia é necessário'),
    corporateName: yup.string().required('A razão social é necessária'),
    cnpj: yup
      .string()
      .required('O CNPJ é necessário')
      .test('is-cnpj', 'Informe um CNPJ válido', (value) => isValidCnpj(value)),
    areaOfOperation: yup.string().required('A área de operação é necessária'),
  });

  return schema
    .validate(req.body)
    .then(() => next())
    .catch((error) => next(error));
};

export default ValidationEnvironmentPost;

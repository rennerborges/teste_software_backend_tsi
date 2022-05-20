import mongoose from 'mongoose';
import * as yup from 'yup';
import { isValidCnpj } from '../util/cnpj';

const ValidationCompanyEdit = (req, res, next) => {
  const schema = yup.object().shape({
    id: yup
      .string()
      .required('O id da empresa é necessário')
      .test('is-id-mongo', 'Informe um company id válido', (value) =>
        mongoose.Types.ObjectId.isValid(value),
      ),
    fantasyName: yup.string(),
    corporateName: yup.string(),
    cnpj: yup
      .string()
      .test(
        'is-cnpj',
        'Informe um CNPJ válido',
        (value) => !value || isValidCnpj(value),
      ),
    areaOfOperation: yup.string(),
  });

  return schema
    .validate(req.body)
    .then(() => next())
    .catch((error) => next(error));
};

export default ValidationCompanyEdit;

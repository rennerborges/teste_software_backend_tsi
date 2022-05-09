import * as yup from 'yup';

const ValidationPointPost = (req, res, next) => {
  const schema = yup.object().shape({
    date: yup.date().required('A data do ponto é necessária'),
    companyId: yup.string().required('O id da empresa é necessário'),
    userId: yup.string().required('O id do usuário é necessário'),
  });

  return schema
    .validate(req.body)
    .then(() => next())
    .catch((error) => next(error));
};

export default ValidationPointPost;

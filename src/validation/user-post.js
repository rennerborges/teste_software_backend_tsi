import * as yup from 'yup';

const ValidationUserPost = (req, res, next) => {
  let schema = yup.object().shape({
    name: yup.string().required(),
    tel: yup.string().required(),
    email: yup.string().email().required(),
    dateOfBirth: yup.date().required(),
  });

  // check validity
  schema
    .validate(req.body)
    .then(function (valid) {
      next();
    })
    .catch((error) => next(error));
};

export default ValidationUserPost;

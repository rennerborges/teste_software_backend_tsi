import CompanyModel from '../models/company';

export const ValidateCompany = async (req, res, next) => {
  const id = req.params.id || req.body.id;

  const company = await CompanyModel.findById(id);

  if (!company || !company.enabled) {
    return res.status(404).json({ message: 'Empresa não encontrada' });
  }

  const { user } = req;
  console.log('id', id);
  console.log('user.companyId', user.companyId);
  if (user.companyId !== id) {
    return res
      .status(403)
      .json({ auth: false, message: 'Usuário não autorizado nessa empresa.' });
  }

  req.company = company;
  next();
};

export default {
  ValidateCompany,
};

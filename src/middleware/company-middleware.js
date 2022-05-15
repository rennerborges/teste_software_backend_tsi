import CompanyModel from '../models/company';

export const ValidateCompany = async (req, res, next) => {
  const id = req.params.id || req.body.id;

  const company = await CompanyModel.findById(id);

  if (!company || !company.enabled) {
    return res.status(404).json({ message: 'Company Not Found' });
  }

  req.company = company;
  next();
};

export default {
  ValidateCompany,
};

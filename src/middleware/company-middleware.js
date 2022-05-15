import mongoose from 'mongoose';
import CompanyModel from '../models/company';

export const ValidateCompany = async (req, res, next) => {
  const id = req.params.id || req.body.id || req.body.companyId;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Informe um company id válido');
    }

    const company = await CompanyModel.findById(id);

    if (!company || !company.enabled) {
      return res.status(404).json({ message: 'Empresa não encontrada' });
    }

    const { user } = req;

    if (user.companyId !== id && user.role !== 's') {
      return res.status(403).json({
        auth: false,
        message: 'Usuário não autorizado nessa empresa.',
      });
    }

    req.company = company;
    next();
  } catch (error) {
    next(error);
  }
};

export default {
  ValidateCompany,
};

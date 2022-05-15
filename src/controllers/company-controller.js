import mongoose from 'mongoose';
import CompanyModel from '../models/company';
import { removeValueUndefinedOrNull } from '../util/object';

export const getEnvironment = async (req, res, next) => {
  const { id } = req.params;

  try {
    console.log('\n\n\npassei');
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Informe um id válido');
    }

    const company = await CompanyModel.findById(id);

    if (!company || !company.enabled) {
      return res.status(404).json({ message: 'Company not found' });
    }

    res.json({ company });
  } catch (error) {
    next(error);
  }
};

export const getEnvironments = async (req, res) => {
  const companies = await CompanyModel.find();

  res.json({
    companies,
  });
};

export const createEnvironment = async (req, res, next) => {
  const { body } = req;

  try {
    const companyAlreadyExists = await CompanyModel.findOne({
      cnpj: body.cnpj,
    });

    if (companyAlreadyExists) {
      throw new Error('Empresa já existente');
    }

    const company = new CompanyModel({
      fantasyName: body.fantasyName,
      corporateName: body.corporateName,
      cnpj: body.cnpj,
      areaOfOperation: body.areaOfOperation,
      enabled: true,
    });

    await company.save();

    res.status(201).json({ company });
  } catch (error) {
    next(error);
  }
};

export const updateEnvironment = async (req, res) => {
  const { body } = req;

  try {
    const bodyUpdate = removeValueUndefinedOrNull({
      fantasyName: body.fantasyName,
      corporateName: body.corporateName,
      areaOfOperation: body.areaOfOperation,
    });

    const company = await CompanyModel.findOneAndUpdate(
      { _id: body.id },
      bodyUpdate
    );

    if (!company) {
      return res.status(404).json({ message: 'Empresa não encontrada' });
    }

    res.json({ message: 'Ação realizada com sucesso!' });
  } catch (error) {
    next(error);
  }
};

export const deleteEnvironment = async (req, res, next) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Informe um id válido');
    }

    const bodyUpdate = {
      enabled: false,
    };

    const company = await CompanyModel.findOneAndUpdate(
      { _id: id },
      bodyUpdate
    );

    if (!company) {
      return res.status(404).json({ message: 'Empresa não encontrada' });
    }

    res.json({ message: 'Ação realizada com sucesso!' });
  } catch (error) {
    next(error);
  }
};

export default {
  getEnvironment,
  getEnvironments,
  createEnvironment,
  updateEnvironment,
  deleteEnvironment,
};

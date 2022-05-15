import mongoose from 'mongoose';
import CompanyModel from '../models/company';
import { removeValueUndefinedOrNull } from '../util/object';

export const getEnvironment = async (req, res, next) => {
  const { id } = req.params;

  try {
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

export const createEnvironment = async (req, res) => {
  const { body } = req;

  try {
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
      return res.status(404).json({ message: 'Company not found' });
    }

    res.json({ message: 'Successfully', company });
  } catch (error) {
    next(error);
  }
};

export const deleteEnvironment = async (req, res) => {
  res.json({ status: 'ok' });
};

export default {
  getEnvironment,
  getEnvironments,
  createEnvironment,
  updateEnvironment,
  deleteEnvironment,
};

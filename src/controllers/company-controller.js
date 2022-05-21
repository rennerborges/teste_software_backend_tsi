import mongoose from 'mongoose';
import CompanyModel from '../models/company';
import { removeMaskCnpj } from '../util/cnpj';
import { removeValueUndefinedOrNull } from '../util/object';

export const getEnvironment = async (req, res, next) => {
  /* #swagger.tags = ["Empresas"] */
  /* #swagger.description = "Rota responsável por trazer uma empresa específica pelo ID da mesma" */
  /* #swagger.parameters['id'] = {
      in: "path",
      description: "ID da empresa",
      required: true,
      type: "string",
  } */
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
  /* #swagger.tags = ["Empresas"] */
  /* #swagger.description = "Rota responsável por trazer todas empresas" */

  const companies = await CompanyModel.find();

  res.json({
    companies,
  });
};

export const createEnvironment = async (req, res, next) => {
  /* #swagger.tags = ["Empresas"] */
  /* #swagger.description = "Rota responsável por criar uma empresa" */
  /* #swagger.requestBody = { 
    required: true, 
    content: { 
      "application/json": { 
        schema: { $ref: "#/components/schemas/CreateCompany" }, 
      } 
    } 
    } 
  */

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
      cnpj: removeMaskCnpj(body.cnpj),
      areaOfOperation: body.areaOfOperation,
      enabled: true,
    });

    await company.save();

    res.status(201).json({ company });
  } catch (error) {
    next(error);
  }
};

export const updateEnvironment = async (req, res, next) => {
  /* #swagger.tags = ["Empresas"] */
  /* #swagger.description = "Rota responsável por atualizar uma empresa utilizando seu ID" */
  /* #swagger.requestBody = { 
    required: true, 
    content: { 
      "application/json": { 
        schema: { $ref: "#/components/schemas/EditCompany" }, 
      } 
    } 
    } 
  */
  const { body } = req;

  try {
    const bodyUpdate = removeValueUndefinedOrNull({
      fantasyName: body.fantasyName,
      corporateName: body.corporateName,
      areaOfOperation: body.areaOfOperation,
    });

    const company = await CompanyModel.findOneAndUpdate(
      { _id: body.id },
      bodyUpdate,
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
  /* #swagger.tags = ["Empresas"] */
  /* #swagger.description = "Rota responsável por desativar uma empresa utilizando seu ID" */
  /* #swagger.parameters['id'] = {
      in: "path",
      description: "ID da empresa",
      required: true,
      type: "string",
  } */

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
      bodyUpdate,
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

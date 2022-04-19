export const getEnvironment = (req, res) => {
  res.json({
    environment: {
      fantasyName: 'Renner Bars',
      corporateName: 'Renner Bars Corporate',
      cnpj: '68035847000145',
      areaOfOperation: 'Bar',
    },
  });
};

export const getEnvironments = (req, res) => {
  res.json({
    environments: [
      {
        fantasyName: 'Renner Bars',
        corporateName: 'Renner Bars Corporate',
        cnpj: '68035847000145',
        areaOfOperation: 'Bar',
      },
      {
        fantasyName: 'Neco Pier',
        corporateName: 'Neco Pier Food',
        cnpj: '55218414000183',
        areaOfOperation: 'Comida',
      },
      {
        fantasyName: 'Rafael Auto Peça',
        corporateName: 'Rafa conserta carro',
        cnpj: '48842115000150',
        areaOfOperation: 'Auto center',
      },
      {
        fantasyName: 'Daniel Scene',
        corporateName: 'Scene one',
        cnpj: '72826078000170',
        areaOfOperation: 'Scene',
      },
    ],
  });
};

export const createEnvironment = (req, res) => {
  res.json({ environment: req.body });
};

export const updateEnvironment = (req, res) => {
  res.json({ status: 'ok' });
};

export default {
  getEnvironment,
  getEnvironments,
  createEnvironment,
  updateEnvironment,
};

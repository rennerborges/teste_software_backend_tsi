export const getPoint = (req, res) => {
  /* #swagger.tags = ["Pontos"] */

  res.json({
    date: new Date(),
    user: 1,
    company: 1,
  });
};

export const getPoints = (req, res) => {
  /* #swagger.tags = ["Pontos"] */
  res.json({
    users: [
      {
        date: new Date(),
        user: 1,
        company: 1,
      },
      {
        date: new Date(),
        user: 2,
        company: 1,
      },
      {
        date: new Date(),
        user: 3,
        company: 1,
      },
      {
        date: new Date(),
        user: 4,
        company: 1,
      },
    ],
  });
};

export const createPoint = (req, res) => {
  /* #swagger.tags = ["Pontos"] */
  res.status(201).json({ point: req.body });
};

export const updatePoint = (req, res) => {
  /* #swagger.tags = ["Pontos"] */
  res.json({ status: 'ok' });
};

export default {
  getPoint,
  getPoints,
  createPoint,
  updatePoint,
};

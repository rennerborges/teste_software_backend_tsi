export const getPoint = (req, res) => {
  res.json({
    date: new Date(),
    user: 1,
    company: 1,
  });
};

export const getPoints = (req, res) => {
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
  res.status(201).json({ point: req.body });
};

export const updatePoint = (req, res) => {
  res.json({ status: 'ok' });
};

export default {
  getPoint,
  getPoints,
  createPoint,
  updatePoint,
};

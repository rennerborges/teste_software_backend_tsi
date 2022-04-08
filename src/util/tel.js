export const isValidTel = (value) => {
  const regex = /^(\(\d{2}\)|\d{2})[\s-]?9?\d{4}-?\d{4}$/;
  return regex.test(value);
};

export default { isValidTel };

export const removeValueUndefinedOrNull = (object) => {
  const cloneObject = { ...object };

  Object.keys(cloneObject).forEach((key) => {
    if (!object[key]) {
      delete object[key];
    }
  });

  return cloneObject;
};

export default {
  removeValueUndefinedOrNull,
};

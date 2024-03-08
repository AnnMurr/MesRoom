export const setDataToSessionStorage = (name, data) => {
  sessionStorage.setItem(name, JSON.stringify(data));
};

export const getDataFromSessionStorage = (name) => {
  return JSON.parse(sessionStorage.getItem(name));
};

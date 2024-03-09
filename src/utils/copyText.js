export const getCopyText = (text) => {
  return new Promise((resolve, reject) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        resolve(true);
      })
      .catch((error) => {
        console.error("Error copying text: ", error);
        reject(error);
      });
  });
};

export const simulatePageReload = () => {
  window.addEventListener("popstate", function (event) {
    window.location.reload();
  });
};

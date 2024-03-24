export const simulatePageReload = () => {
  window.addEventListener("popstate", function () {
    window.location.reload();
  });
};

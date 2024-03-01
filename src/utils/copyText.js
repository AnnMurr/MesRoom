function getCopySuccess() {
  const isSuccess = document.querySelector(".success");
  if (!isSuccess) {
    const container = document.createElement("div");
    container.classList.add("success");
    const text = document.createElement("span");
    text.textContent = "The link has been successfully copied.";

    container.appendChild(text);
    return container;
  }
}

function addSuccessModal() {
  const modal = getCopySuccess();
  modal && document.body.appendChild(modal);
  modal && changeModalBackground(modal);
}

function changeModalBackground(modal) {
  const colors = [ 
    "#dce3e9b0", "#dce3e990", "#dce3e96d", 
    "#dce3e957", "#dce3e940", "#dce3e92e", 
    "#dce3e91f", "#dce3e910",
  ];

  colors.forEach((color, index) => {
    setTimeout(() => {
      modal.style.backgroundColor = color;
      if (index === colors.length - 1) modal.remove();
    }, 2450 + index * 100);
  });
}

export const getCopyText = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      addSuccessModal();
    })
    .catch((error) => console.error("Error copying text: ", error));
};

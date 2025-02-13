document.addEventListener("DOMContentLoaded", () => {
  // Injects the decorative elements
  // 1. Create the elements
  const detailsLeft = document.createElement("div");
  detailsLeft.classList.add("details-left");

  const detailsRight = document.createElement("div");
  detailsRight.classList.add("details-right");

  //  2. Append them before closing body tag
  document.body.appendChild(detailsLeft);
  document.body.appendChild(detailsRight);
});

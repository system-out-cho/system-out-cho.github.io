function AddHoverToNav(enterColor, leaveColor) {
  const hoverBox = document.querySelector("#hover-box");
  const buttonRow = document.querySelector(".button-row");

  buttonRow.addEventListener("mousemove", (e) => {
    hoverBox.style.background = enterColor;
    const bounding = buttonRow.getBoundingClientRect();

    const x = e.clientX - bounding.left;

    hoverBox.style.transform = `translate(${x - hoverBox.offsetWidth / 2}px`;
  });

  buttonRow.addEventListener("mouseleave", (e) => {
    hoverBox.style.background = leaveColor;
  });
}

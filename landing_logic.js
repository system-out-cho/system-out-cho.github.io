window.onload = function () {
  const hoverBox = document.querySelector("#hover-box");
  const buttonRow = document.querySelector(".button-row");

  buttonRow.addEventListener("mousemove", (e) => {
    console.log("entering");
    hoverBox.style.background = "white";
    const bounding = buttonRow.getBoundingClientRect();

    const x = e.clientX - bounding.left;
    const y = e.clientY - bounding.top;

    hoverBox.style.transform = `translate(${x - hoverBox.offsetWidth / 2}px`;
  });

  buttonRow.addEventListener("mouseleave", (e) => {
    console.log("leaving");
    hoverBox.style.background = "transparent";
  });
};

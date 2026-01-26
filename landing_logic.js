window.onload = function () {
  const hoverBox = document.querySelector("#hover-box");
  const buttonRow = document.querySelector(".button-row");
  const checkOutText = document.querySelector("#check-out");
  const barcode = document.querySelector("#barcode");

  AnimateText(barcode, "MYPORTFOLIO");
  AnimateText(checkOutText, "CHECK OUT");

  buttonRow.addEventListener("mousemove", (e) => {
    hoverBox.style.background = "white";
    const bounding = buttonRow.getBoundingClientRect();

    const x = e.clientX - bounding.left;
    const y = e.clientY - bounding.top;

    hoverBox.style.transform = `translate(${x - hoverBox.offsetWidth / 2}px`;
  });

  buttonRow.addEventListener("mouseleave", (e) => {
    hoverBox.style.background = "transparent";
  });
};

function AnimateText(element, target) {
  gsap.to(element, {
    duration: 5,
    scrambleText: target,
  });
}

window.onload = function () {
  const hoverBox = document.querySelector("#hover-box");
  const buttonRow = document.querySelector(".button-row");
  const checkOutText = document.querySelector("#check-out");
  const barcode = document.querySelector("#barcode");
  const hoverBox2 = document.querySelector("#hover-box2");
  const col3 = document.querySelector("#column3");

  AnimateText(barcode, "MYPORTFOLIOYC");
  AnimateText(checkOutText, "CHECK OUT");

  buttonRow.addEventListener("mousemove", (e) => {
    hoverBox.style.background = "white";
    hoverBox2.style.background = "black";
    const bounding = buttonRow.getBoundingClientRect();
    const bounding2 = col3.getBoundingClientRect();

    const x = e.clientX - bounding.left;
    const x2 = e.clientX - bounding2.left;

    hoverBox.style.transform = `translate(${x - hoverBox.offsetWidth / 2}px`;

    hoverBox2.style.transform = `translate(${0}px, ${x / 3 - hoverBox2.offsetHeight / 2}px)`;
  });

  buttonRow.addEventListener("mouseleave", (e) => {
    hoverBox.style.background = "transparent";
    hoverBox2.style.background = "transparent";
  });

  button1.addEventListener("mousemove", (e) => {
    console.log("hovering");
  });
};

function AnimateText(element, target) {
  gsap.to(element, {
    duration: 5,
    scrambleText: target,
  });
}

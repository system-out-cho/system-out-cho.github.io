window.onload = function () {
  const col1 = document.querySelector("#column1");
  col1.insertAdjacentHTML("beforeend", buttonRow);
  
  AddHoverToNav("white", "transparent");

  const checkOutText = document.querySelector("#check-out");
  const barcode = document.querySelector("#barcode");

  AnimateText(barcode, "MYPORTFOLIOYC");
  AnimateText(checkOutText, "CHECK OUT");
};

function AnimateText(element, target) {
  gsap.to(element, {
    duration: 5,
    scrambleText: target,
  });
}

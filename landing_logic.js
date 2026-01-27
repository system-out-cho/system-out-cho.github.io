window.onload = function () {
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

const repoName = "Portfolio-Current";

const buttonRow = `
  <div class="button-row">
    <a href="/pages/art.html" class="link">
      <button>3D WORK</button>
    </a>
    <a href="/pages/code.html" class="link">
      <button>CODE</button>
    </a>
    <a href="/pages/gallery.html" class="link">
      <button>GALLERY</button>
    </a>
    <a href="/pages/about.html" class="link">
      <button>ABOUT ME</button>
    </a>
    <div id="hover-box"></div>
  </div>`;

function AddNavBar(page_title) {
  const navTemplate = `
    <div class="header">
      <div class="row">
        <div class="top-part">
          <a href="/index.html" class="title">${page_title}</a>
          ${buttonRow}
        </div>
      </div>
    </div>`;

  const page = document.querySelector(".page");
  page.insertAdjacentHTML("afterbegin", navTemplate);
}

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

function ImportFonts() {
  const head = document.head;
  const imports = `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lexend:wght@100..900&family=Libre+Barcode+128&family=Libre+Barcode+39+Text&display=swap" rel="stylesheet">`;
  head.insertAdjacentHTML("afterbegin", imports);
}

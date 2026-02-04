const goBack = `<a href="/code.html" id="go-back-button">[GO BACK]</a>`;

const buttonRow = `
  <div class="button-row">
    <a href="/art.html" class="link">
      <button>3D WORK</button>
    </a>
    <a href="/code.html" class="link">
      <button>CODE</button>
    </a>
    <a href="/gallery.html" class="link">
      <button>GALLERY</button>
    </a>
    <a href="/about.html" class="link">
      <button>ABOUT ME</button>
    </a>
    <div id="hover-box"></div>
  </div>`;

function AddNavBar(page_title) {
  const navTemplate = `
        <div class="header">
        <div class="row">
          <div class="top-part">
            <a href="landing.html" class="title">${page_title}</a>
            ${buttonRow}
          </div>
        </div>
      </div>`;
  
  const page = document.querySelector(".page");
  page.insertAdjacentHTML('afterbegin', navTemplate);
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
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lexend:wght@100..900&family=Libre+Barcode+128&display=swap"
      rel="stylesheet"
    />`;
  head.insertAdjacentHTML("afterbegin", imports);
}
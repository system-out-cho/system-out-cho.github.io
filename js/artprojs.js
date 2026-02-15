const imagePath = "../content/3d_art/";

window.onload = function () {
  setPageInformation();
  scrollToHashIfExists();
  gsapAnimation();

};

function gsapAnimation() {
  // split elements with the class "split" into words and characters
  let split = SplitText.create("#statement", { type: "words, chars" });

  // now animate the characters in a staggered fashion
  gsap.from(split.chars, {
    duration: 0.5, 
    y: 50,       // animate from 100px below
    autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
    stagger: 0.02 // 0.05 seconds between each
  });
}

function setPageInformation() {
  let page_body = document.querySelector(".page-body");

  for (let i = data.length - 1; i >= 0; i--) {
    const data_obj = data[i];
    const projHTML = makeProjHTML(data_obj);
    page_body.insertAdjacentHTML("afterbegin", projHTML);
  }
}

function makeProjHTML(data_obj) {
  let media;
  let summaryTemplate;
  const type = data_obj.media_type;
  const media_link = data_obj.media_link;
  const summary = data_obj.summary;
  const refs_arr = data_obj.refs;
  const id = data_obj.id;

  if (type === "video") {
    media = `<iframe
            src="${media_link}"
            title="YouTube video player"
            frameborder="0"
            allow="
                accelerometer;
                autoplay;
                clipboard-write;
                encrypted-media;
                gyroscope;
                picture-in-picture;
                web-share;
            "
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            ></iframe>`;
  } else if (type === "image") {
    media = `<img src="${imagePath + media_link}" alt="test-image" />`;
  } else {
    console.log("incorrect media type");
  }

  if (summary) {
    let ref_html_string = "";

    for (let i = 0; i < refs_arr.length; i++) {
      const ref = refs_arr[i];
      const ref_html = `
          <div class="ref-image-container">
            <img src="../content/3d_art/ref/${ref}" />
          </div>`;
      ref_html_string += ref_html;
    }

    summaryTemplate = `        
        <details class="learn-more">
            <summary>LEARN MORE</summary>
            <div class="expanded-content">
                <p>${summary}</p>
                ${ref_html_string}
            </div>
        </details>`;
  } else {
    summaryTemplate = ``;
  }

  const projTemplate = `
    <div class="project" id=${id}>
        <div class="project-column-1">
        <div class="project-name">${data_obj.project_name}</div>
        <div class="description">
            ${data_obj.desc}
        </div>
            ${summaryTemplate}
        </div>

        <div class="project-column-2">
        <div class="media-container">
            ${media}
        </div>
        </div>
    </div>`;

  return projTemplate;
}

function scrollToHashIfExists() {
  const hash = window.location.hash;
  if (!hash) return;

  const el = document.querySelector(hash);
  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

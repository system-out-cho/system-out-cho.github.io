const imagePath = "../content/";

window.onload = function () {
  console.log("testing");
  setPageInformation();
};

function setPageInformation() {
  let page_body = document.querySelector(".page-body");

  for (let i = 0; i < data.length; i++) {
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
  const summary_exists = data_obj.summary_exists;
  const refs_arr = data_obj.refs;

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

  if (summary_exists) {
    for (let i = 0; i < refs_arr.length; i++) {
      const ref = refs_arr[i];
    }

    summaryTemplate = `        
        <details class="learn-more">
            <summary>LEARN MORE</summary>
            <div class="expanded-content">
                <p>Extra content here Lorem Ipsum asjdklajdasjdasjd.</p>
            </div>
        </details>
    `;
  } else {
    summaryTemplate = ``;
  }

  const projTemplate = `
    <div class="project">
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

let lang_tags_arr;
let software_tags_arr;


window.onload = function () {
    buildPage();
    fixLayout();
    appendTags();
}

//scripts dont run in these html strings
function buildPage() {
    const proj_title = this.document.querySelector(".project-title").outerHTML;
    const proj_desc = this.document.querySelector(".project-desc").outerHTML;

    //selecting all elements with class of media
    const mediaElements = this.document.querySelectorAll(".media");

    //media html strings to be injected
    let mediaArr = [];

    for (let i = 0; i < mediaElements.length; i++) {
        let mediaElement = mediaElements[i];
        let mediaHTML = "";
        if (mediaElement.tagName === "DIV") {
            mediaHTML = buildiframeHTML(mediaElement.dataset.videoSrc);
        } else {
            mediaHTML = mediaElement.outerHTML;
        }
        mediaArr.push(mediaHTML);
    }

    let bottomSection = "";

    if (mediaElements.length != 1) {
        const img_desc = this.document.querySelector(".img-desc").outerHTML;
        bottomSection = `
            <div class="section-bottom">
                <div class="img-holder">
                    <div class="img-container-bottom">
                    ${mediaArr[1]}
                    </div>
                    <div class="img-container-bottom">
                    ${mediaArr[2]}
                    </div>
                    </div>
                    ${img_desc}
                    </div>
                </div>
            </div>`;
    } 

    const currentHTML = `
    <!doctype html>
    <html>
        <body>
            <div class="page">
                <div class="main-body">
                    <div class="section-top">
                        <div class="project">
                            ${proj_title}
                            <div class="tags-list"></div>
                            ${proj_desc}
                        </div>
                        <div class="img-container">
                            ${mediaArr[0]}
                        </div>
                    </div>
                    ${bottomSection}
                </div>
            </div>
        </body>
    </html>
    `;

    
    document.body.innerHTML = currentHTML;
}

function buildiframeHTML(link) {
    const iframe = `
        <iframe
            src="${link}"
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
        ></iframe>`
    return iframe;
}

function storeTags(lang_tags, software_tags) {
    lang_tags_arr = lang_tags;
    software_tags_arr = software_tags;
}

function appendTags() {
    for (let i = lang_tags_arr.length - 1; i >= 0; i--) {
        const htmlString = `<div class="language-tag">${lang_tags_arr[i]}</div>`;
        const tags_list = document.querySelector(".tags-list");
        tags_list.insertAdjacentHTML("afterbegin", htmlString);
    }

    for (let i = software_tags_arr.length - 1; i >= 0; i--) {
        const htmlString = `<div class="software-tag">${software_tags_arr[i]}</div>`;
        const tags_list = document.querySelector(".tags-list");
        tags_list.insertAdjacentHTML("afterbegin", htmlString);
    }
}

function fixLayout() {
    AddNavBar("blank");
    AddHoverToNav("black", "transparent");
    const title = document.querySelector(".title");
    const backButton = document.createElement("back");
    backButton.innerHTML = `<a href="../../pages/code.html" id="go-back-button">[GO BACK]</a>`;
    title.replaceWith(backButton);
}
let lang_tags_arr;
let software_tags_arr;


window.onload = function () {
    console.log("testing");

    buildPage();
    fixLayout();
    appendTags();
}

//scripts dont run in these html strings
function buildPage() {
    const proj_title = this.document.querySelector(".project-title").outerHTML;
    const proj_desc = this.document.querySelector(".project-desc").outerHTML;
    const img1 = this.document.querySelector("#img1").outerHTML;
    const img2 = this.document.querySelector("#img2").outerHTML;
    const img3 = this.document.querySelector("#img3").outerHTML;
    const img_desc = this.document.querySelector(".img-desc").outerHTML;

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
                        ${img1}
                    </div>
                </div>
                <div class="section-bottom">
                    <div class="img-holder">
                        <div class="img-container-bottom">
                        ${img2}
                        </div>
                        <div class="img-container-bottom">
                        ${img3}
                        </div>
                    </div>
                    ${img_desc}
                </div>
            </div>
            </div>
        </body>
    </html>
    `;
    document.body.innerHTML = currentHTML;
}

function storeTags(lang_tags, software_tags) {
    lang_tags_arr = lang_tags;
    software_tags_arr = software_tags;
}

function appendTags() {
    for (let i = lang_tags_arr.length - 1; i >= 0; i--) {
        console.log(lang_tags_arr[i]);
        const htmlString = `<div class="language-tag">${lang_tags_arr[i]}</div>`;
        const tags_list = document.querySelector(".tags-list");
        tags_list.insertAdjacentHTML("afterbegin", htmlString);
    }

    for (let i = software_tags_arr.length - 1; i >= 0; i--) {
        console.log(software_tags_arr[i]);
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
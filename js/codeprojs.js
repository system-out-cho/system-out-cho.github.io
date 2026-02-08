// const path = '/json/CodingProjects.json'
// const pagePath = '/pages/code.html'


window.onload = function () {
    //add hover for nav
    //making new swiper 
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,

        breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        },
        
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },

        pagination: {
        el: ".swiper-pagination-custom",
        clickable: true,
        },
    });

    // fetchJsonData()
    // .then(data => setPageInformation(data));
    setPageInformation();
};


// async function fetchJsonData() {
//   try {
//     const response = await fetch(path);
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching JSON:', error);
//   }
// }

function setPageInformation() {
    const swiper_wrapper = document.querySelector(".swiper-wrapper");
    console.log(data);
    console.log(swiper_wrapper);
}
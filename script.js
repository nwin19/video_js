// const preloader = document.querySelector(".preloader");
// const switchBtn = document.querySelector(".switch-btn");
// const video = document.querySelector(".video");
// const btn = document.querySelector(".btn");

// window.addEventListener("load", function() {
//     preloader.classList.add("hide-preloader");
// })

// btn.addEventListener("click", function() {
//     if(!btn.classList.contains("slide")) {
//         btn.classList.add("slide");
//         video.pause();
//     } else {
//         btn.classList.remove("slide");
//         video.play();
//     }
// })


const preloader = document.querySelector(".preloader");
const switchBtn = document.querySelector(".switch-btn");
const btn = document.querySelector(".btn");
const video = document.querySelector(".video");

window.addEventListener("load", function() {
    preloader.classList.add("hide-preloader");
})

btn.addEventListener("click", function() {
    if(!btn.classList.contains("slide")) {
        btn.classList.add("slide");
        video.pause();
    } else {
        btn.classList.remove("slide");
        video.play();
    }
})
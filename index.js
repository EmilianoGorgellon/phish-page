// console.log("hola")
let buttonNext = document.getElementById("next");
let buttonPrev = document.getElementById("prev");
let buttonPlay = document.querySelector(".button--link");
let containerMain = document.querySelector(".container--all");
let getAllPages = document.querySelectorAll(".pages");
let position = 0;
containerMain.style.width = `${(getAllPages.length + 1) * 100}%`

const next = () => {
    if (position !== -(getAllPages.length * 10)) {
        position = position - 10;
        containerMain.style.transform = `translateX(${position}%)`;
    } else {
        containerMain.style.transform = `translateX(${position - 1}%)`;
        pageBack();
    }
}

const prev = () => {
    if (position !== 0) {
        position = position + 10;
        containerMain.style.transform = `translateX(${position}%)`
    } else {
        containerMain.style.transform = `translateX(${position + 1}%)`;
        pageBack();
    }
}

buttonNext.addEventListener('click',next);
buttonPlay.addEventListener('click', next);
buttonPrev.addEventListener('click', prev);

const pageBack = () => setTimeout(() => {
    containerMain.style.transform = `translateX(${position}%)`;
}, 300)
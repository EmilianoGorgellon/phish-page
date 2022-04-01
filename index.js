import data from "./data.js";
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

getAllPages.forEach((element, i) => {
    console.log(i)
    element.insertAdjacentHTML(`beforeend`,
        `<div class="container--data-questions">
            <img class="data--img" src="${data[i].imageURL}" alt="image-${i}" />
            <div class="container--buttons-question">
                <button class="button-phish button" dataId=${i} state=${false}>Phish</button>
                <button class="button-legit button" dataId=${i} state=${true}>Legit</button>
            </div>
            <div class="container--data-text no-show">
                <p>${data[i].tips[0]}</p>
                <p>${data[i].tips[1]}</p>
                <p>${data[i].tips[2]}</p>
            </div>
        </div>`
    )
});


let buttons = document.querySelectorAll(".button");
buttons.forEach(element => {
    element.addEventListener('click', (e) => {
        let { dataId, state } = e.target.attributes;
        console.log(data[dataId.value].answer)
        console.log(state.value)
        if (`${data[dataId.value].answer}` === `${state.value}`) {
            console.log("esta bien")
        }
        next()
    })
})
console.log(buttons)
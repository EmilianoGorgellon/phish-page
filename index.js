import data from "./data.js";
const buttonBack = document.getElementById("prev");
const buttonPlay = document.querySelector(".button--play");
const containerMain = document.querySelector(".container--all");
let position = 0;
let result = 0;
let questions = 0;
containerMain.style.width = `${(data.length + 2) * 100}%`;

const sendResults = () => {
    let text_answer = document.querySelector(".result-page");
    result >= 5 ? 
        text_answer.innerHTML = 
            `
                <h5 class="title-result">Game Over</h5>
                <p class="result result-correct">You got ${result}/${data.length} correct!</p>
                <button class="button-default button-replay">Play Again</button>
            ` 
        :
            text_answer.innerHTML= 
            `
                <h5 class="title-result">Game Over</h5>
                <p class="result result-incorrect">You got ${result}/${data.length} correct!</p>
                <button class="button-default button-replay">Play Again</button>
            `
    let button_replay =  document.querySelector(".button-replay");
    button_replay.addEventListener('click', () => window.location.reload())

}
const next = () => {
    position = position - 8.33;
    containerMain.style.transform = `translateX(${position}%)`;
    if (questions === data.length) return sendResults();
}

const prev = () => {
    if (position < -9) {
        position = position + 8.33;
        containerMain.style.transform = `translateX(${position}%)`
    } else {
        containerMain.style.transform = `translateX(${position + 1}%)`;
        pageBack();
    }
}

buttonPlay.addEventListener('click', () => {
    next();
    buttonBack.classList.remove('no-show')
});
buttonBack.addEventListener('click', prev);

const pageBack = () => setTimeout(() => {
    containerMain.style.transform = `translateX(${position}%)`;
}, 300)

let dataFragment = document.createDocumentFragment();
data.forEach((element, i) => {
    let element_data = document.createElement('section');
    element_data.classList.add("pages")
    element_data.innerHTML = 
    `
        <div class="container--data-questions">
            <img class="data--img" src="${element.imageURL}" alt="image-${i}" />
            <div class="container--buttons-question">
                <button class="button-phish button-question button-default" dataId=${i} state=${false}>Phish</button>
                <button class="button-legit button-question button-default" dataId=${i} state=${true}>Legítimo</button>
            </div>
            <div class="container--next-answer no-show">
                <button class="button-next button-default">Siguiente <i class="fas fa-arrow-right"></i></button>
            </div>
            <div class="container--data-text no-show">
                <h4 class="data--text-title">Tips</h4>
                <p class="data--text-content">${element.tips}</p>
            </div>
        </div>
    `
    dataFragment.appendChild(element_data);
})
containerMain.appendChild(dataFragment);

containerMain.insertAdjacentHTML('beforeend', 
    `
        <div class="container--result-page">
            <div class="result-page"></div>
        </div>
    `
);

const buttons = document.querySelectorAll(".button-question");
const container_button_answer = document.querySelectorAll(".container--next-answer")
buttons.forEach(element => {
    element.addEventListener('click', (e) => {
        let { dataId, state } = e.target.attributes;
        let content_text;
        questions++;
        if (`${data[dataId.value].answer}` === `${state.value}`) {
            result++;
            content_text = `<h3 class='state-true'>Correcto, esto es ${data[dataId.value].answer ? "legítimo" : "un phishing"}</h3>`;
        } else {
            content_text = `<h3 class='state-false'>Incorrecto, esto es ${data[dataId.value].answer ? "legítimo" : "un phishing"}</h3>`;
        }
        container_button_answer[dataId.value].insertAdjacentHTML('afterbegin', content_text);
        container_button_answer[dataId.value].classList.remove('no-show');
        document.querySelectorAll(".container--data-text")[dataId.value].classList.remove('no-show');
        document.querySelectorAll(".container--buttons-question")[dataId.value].classList.add("no-show");
    })
})
const button_next = document.querySelectorAll(".button-next");
button_next.forEach(element => element.addEventListener('click', next))
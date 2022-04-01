import data from "./data.js";
const buttonBack = document.getElementById("prev");
const buttonPlay = document.querySelector(".button--play");
const containerMain = document.querySelector(".container--all");
const getAllPages = document.querySelectorAll(".pages");
let position = 0;
let result = 0;
let questions = 0;
let button_replay;
containerMain.style.width = `${(getAllPages.length + 2) * 100}%`

const sendResults = () => {
    let text_answer = document.querySelector(".result-page");
    // Lo deje comentado por si el resultado es > 5 de las letras en verde o en rojo
    // result > 5 ? text_answer.innerHTML = 
    //     `
    //         <h5 class="title-result">Game Over</h5>
    //         <p class="result result-correct">You got ${result}/${data.length} correct!</p>
    //         <button class="button-default button-replay">Play Again</button>
    //     ` 
    //     : 
    //     `
    //         <h5 class="title-result">Game Over</h5>
    //         <p class="result result-incorrect">You got ${result}/${data.length} correct!</p>
    //         <button class="button-default button-replay">Play Again</button>
    //     `
    text_answer.innerHTML = 
        `
            <h5 class="title-result">Game Over</h5>
            <p class="result result-correct">You got ${result}/${data.length} correct!</p>
            <button class="button-default button-replay">Play Again</button> 
        `;
    button_replay =  document.querySelector(".button-replay");
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

getAllPages.forEach((element, i) => {
    element.insertAdjacentHTML(`beforeend`,
        `<div class="container--data-questions">
            <img class="data--img" src="${data[i].imageURL}" alt="image-${i}" />
            <div class="container--buttons-question">
                <button class="button-phish button-question button-default" dataId=${i} state=${false}>Phish</button>
                <button class="button-legit button-question button-default" dataId=${i} state=${true}>Legit</button>
            </div>
            <div class="container--next-answer no-show">
                <button class="button-next button-default">Next <i class="fas fa-arrow-right"></i></button>
            </div>
            <div class="container--data-text no-show">
                <h4 class="data--text-title">Tips</h4>
                <p class="data--text-content">${data[i].tips}</p>
            </div>
        </div>`
    )
});

const buttons = document.querySelectorAll(".button-question");
const container_button_answer = document.querySelectorAll(".container--next-answer")
buttons.forEach(element => {
    element.addEventListener('click', (e) => {
        let { dataId, state } = e.target.attributes;
        let content_text;
        questions++;
        if (`${data[dataId.value].answer}` === `${state.value}`) {
            result++;
            content_text = "<h3 class='state-true'>Correct, it's legit!</h3>";
        } else {
            content_text = "<h3 class='state-false'>Incorrect, it's a phish!</h3>";
        }
        container_button_answer[dataId.value].insertAdjacentHTML('afterbegin', content_text);
        container_button_answer[dataId.value].classList.remove('no-show');
        document.querySelectorAll(".container--data-text")[dataId.value].classList.remove('no-show');
        document.querySelectorAll(".container--buttons-question")[dataId.value].classList.add("no-show");
    })
})
const button_next = document.querySelectorAll(".button-next");
button_next.forEach(element => element.addEventListener('click', next))

const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        time: document.querySelector("#time-left"),
        time: document.querySelector("#score")
    },
    values:{},
};
function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
}

function addListenerHitBox(){
    state.view.squares.forEach((square) = {});
}

function init(){}
randomSquare();
    
init()
function builder(num) {
    let outerDiv = document.createElement("div");
    let dieArray = pips[num-1];
    for (i=1; i<10; i++) {
        let innerDiv = document.createElement("div");
        innerDiv.setAttribute("class", "dot");
        if(dieArray.includes(i)) {
            innerDiv.classList.add("black");
        }
        outerDiv.append(innerDiv);
    }
    outerDiv.setAttribute("class", "dicer");
    return outerDiv;
}

function roll(num) {
    let rNumber = Math.floor(Math.random() * num) + 1;
    return rNumber;
}

const button = document.querySelector("button");
const output = document.querySelector(".output");
const playerOne = document.querySelector("#player__p-one-die");
const playerTwo = document.querySelector("#player__p-two-die");
const pips = [
    [5],
    [1, 9],
    [1, 5, 9],
    [1, 3, 7, 9],
    [1, 3, 5, 7, 9],
    [1, 3, 4, 6, 7, 9]
];

button.addEventListener("click", function () {
    let rolls = [ roll(6), roll(6) ];
    let temp;
    if ( rolls[0] === rolls[1] ) {
        temp = "Draw";
    } else if ( rolls[0] > rolls[1] ) {
        temp = "Player One Wins!";
    } else {
        temp = "Player Two Wins!";
    }
    updateOutput(playerOne, rolls[0]);
    updateOutput(playerTwo, rolls[1]);
    output.innerHTML = temp;
}
)

function updateOutput(el, num) {
    let holder = builder(num);
    if(el.children[0]) { el.children[0].remove(); }
    el.appendChild(holder);
}
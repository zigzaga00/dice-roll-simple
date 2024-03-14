const button = document.querySelector("button");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const output = document.querySelector("#output")

button.addEventListener("click", function () {
    const rolls = [roll(6), roll(6)];
    let tmp;
    if (rolls[0] === "&#9856;" && rolls[1] === "&#9856;") {
        tmp = "Snake Eyes Watching You!!!";
    } else if (rolls[0] === rolls[1]) {
        tmp = "It Was a Draw";
    } else if (rolls[0] > rolls[1]) {
        tmp = "Player One Wins";
    } else {
        tmp = "Player Two Wins";
    }
    p1.innerHTML = rolls[0];
    p2.innerHTML = rolls[1];
    output.innerHTML = tmp;
}
)

function roll(num) {
    let rNumber = Math.floor(Math.random() * num) + 1;
    let n = 9855;
    let char = `&#${n + rNumber};`;
    return char;
}

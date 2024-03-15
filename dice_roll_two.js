function builder(num) {
    let div = document.createElement("div");
    div.setAttribute("class", "dicer");
    return div;
}

const button = document.querySelector("button");
const output = document.querySelector(".output")

button.addEventListener("click", function () {
    let rollDice = roll(6);
    console.log(rollDice);
    let holder = builder(rollDice);
    output.appendChild(holder);
}
)

function roll(num) {
    let rNumber = Math.floor(Math.random() * num) + 1;
    return rNumber;
}
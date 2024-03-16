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
const pips = [
    [5],
    [1, 9],
    [1, 5, 9],
    [1, 3, 7, 9],
    [1, 3, 5, 7, 9],
    [1, 3, 4, 6, 7, 9]
];
output.appendChild(builder(1));

button.addEventListener("click", function () {
    let rollDice = roll(6);
    console.log(rollDice);
    let holder = builder(rollDice);
    output.children[0].remove();
    output.appendChild(holder);
}
)

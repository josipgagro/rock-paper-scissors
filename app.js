const options = document.getElementsByClassName("option");
const score = document.getElementById("result");
const message = document.getElementById("message");
const arrayOfOptions = ["rock", "paper", "scissors"];
let playeScore = 0;
let botScore = 0;

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", () => {
        let pickedOption = options[i].getAttribute("data-value");
        let botOption = Math.floor((Math.random() * 3));
        botOption = arrayOfOptions[botOption];
        switch (pickedOption) {
            case "rock":
                switch (botOption) {
                    case "rock":
                        updateMessage("You both played &#9994; - result is even");
                        break;
                    case "paper":
                        botScore += 1;
                        updateMessage("You played &#9994; and Bot played &#9995; - you lose");
                        break;
                    case "scissors":
                        playeScore += 1;
                        updateMessage("You played &#9994; and Bot played &#9996;- you win");
                        break;
                }
                break;
            case "paper":
                switch (botOption) {
                    case "rock":
                        playeScore += 1;
                        updateMessage("You played &#9995; and Bot played &#9994; - you win");
                        break;
                    case "paper":
                        updateMessage("You both played &#9995; - result is even");
                        break;
                    case "scissors":
                        botScore += 1;
                        updateMessage("You played &#9995; and Bot played &#9996;- you lose");
                        break;
                }
                break;
            case "scissors":
                switch (botOption) {
                    case "rock":
                        botScore += 1;
                        updateMessage("You played &#9996; and Bot played &#9994; - you lose");
                        break;
                    case "paper":
                        playeScore += 1;
                        updateMessage("You played &#9996; and Bot played &#9995 - you win");
                        break;
                    case "scissors":
                        updateMessage("You both played &#9996; - result is even");
                        break;
                }
                break;
        }
    });
}

function updateMessage(text) {
    message.innerHTML = text;
    message.classList.remove("message-hidden");
    message.classList.add("message-visible");
    score.innerHTML = playeScore + ":" + botScore;
}
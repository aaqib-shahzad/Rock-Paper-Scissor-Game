let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#message");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock","paper","scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];

}
const drawGame = () => {
    console.log("Game was draw");
    message.innerText = "Game was draw. Play again.";
    message.style.backgroundColor = "#081b31";
}
const showwinner = (userWin,userchoice,compchoice) => {
    if(userWin){
        userscore++;
        userscorepara.innerText = userscore;
        console.log("you win!");
        message.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
        message.style6.backgroundColor = "green";
    } else {
        console.log("you lose!");
        compscore++;
        compscorepara.innerText = compscore;

        message.innerText = `You lose! ${compchoice} beats Your ${userchoice}`;
        message.style.backgroundColor = "red";

    }
};

const playgame = (userchoice) => {
    console.log("user choice =", userchoice);
    // Generate computer choice
    const compchoice = gencompchoice();
    console.log("comp choice =", compchoice);

    if(userchoice===compchoice){
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userchoice==="rock"){
            // scissor, paper
            userWin = compchoice === "paper" ? false : true;
        } else if(userchoice==="paper"){
            // rock, scissor
            userWin = compchoice === "rock" ? true : false;
        } else {
            // user = scissor
            // rock, paper
            userWin = compchoice === "rock" ? false : true;
        }
        showwinner(userWin,userchoice,compchoice);
    }

};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => {
    const userchoice = choice.getAttribute("id");
    console.log("choice was clicked.", userchoice);
    playgame(userchoice);
    });
});
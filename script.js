let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const userScorePara=document.querySelector("#userScore");
const compScorePara=document.querySelector("#compScore");
const genCompChoice=()=>{
//rock paper scissors
const options=["rock","paper","scissors"];
// Math.floor(Math.random()*10)//1 to 10 range with only decimal vals
const randIdx=Math.floor(Math.random()*3);
return options[randIdx];
};
const drawGame=()=>{
    // console.log("game was draw");
    msg.innerText="Game was draw!Play Again";
    msg.style.backgroundColor="##081b31";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("you win");
        msg.innerText=`You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";

    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        // console.log("you lose");
        msg.innerText=`You Lose! ${compChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice) =>{
// console.log("user choice=",userChoice);
//generate comp choice -> modular 
const compChoice=genCompChoice();
// console.log("comp choice=",compChoice);
if(userChoice===compChoice){
    drawGame();
}
else{
    let userWin="true";
    if(userChoice==="rock"){
        //comp choice-paper or scissors
userWin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        //rock scissors
        userWin=compChoice==="scissors"?false:true;
    }
    else{
        // user=scissor comp=paper or rock
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
}
}
choices.forEach((choice) =>{
    // console.log(choice)
choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
// console.log("choice was clicked",userChoice);
playGame(userChoice)
});
});
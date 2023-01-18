
// récupérer les button de l'utilisateur
let tackle = document.getElementById("tackle");
let shoot = document.getElementById("shoot");
let dribble = document.getElementById("dribble");

let displayEndGame = document.querySelector("#endGame"); 
let textEndGame = document.querySelector("#endGame p");

let playerImgWin = document.querySelector(".messi-img");
let iaImgWin = document.querySelector(".omwin-img");

console.log(displayEndGame);

// point de l'ordinateur et du joueur
let playerWin = 0;
let iaWin = 0;

let roundPlayer = 0;
let roundIa = 0;

let textRoundPlayer = document.querySelector(".player p span");
let textRoundIa = document.querySelector(".computer p span");

let playerScore = document.getElementById("player-score");
let iaScore = document.getElementById("computer-score");

console.log(playerScore);
console.log(iaScore);

// initialer un onmbre aléatoire
let min= 1; 
let max= 4;  
let robot;

//#region Gérer Le Clic De L'utilisateur

tackle.addEventListener("click" , function(){
    UserClickRock();
    CheckTheWinner();

});

shoot.addEventListener("click" , function(){

    UserClickPaper();
    CheckTheWinner();

});

dribble.addEventListener("click" , function(){
    UserClickScissors();
    CheckTheWinner();
   
});

//#endregion


//#region Fonction Pour Vérifier Si L'utilisateur gagne perd ou égalité

function UserClickRock()
{
    robot = Math.floor(Math.random() * (max - min) + min);

    if(robot == 1)
    {
        console.log("Egalité");
    }
    else if(robot == 2)
    {
        console.log("Ordinateur a gagné");
        iaWin+= 1;
        iaScore.textContent = iaWin;
    }
    else if(robot == 3)
    {
        console.log("Bravo, vous avez gagné");
        playerWin+=1;
        playerScore.textContent = playerWin;

    }
}

function UserClickPaper()
{
    robot = Math.floor(Math.random() * (max - min) + min);

    if(robot == 1)
    {
        console.log("Bravo, vous avez gagné");
        playerWin+=1;
        console.log(playerWin);
        playerScore.textContent = playerWin;
    }
    else if(robot == 2)
    {
        console.log("Egalité");
    }
    else if(robot == 3)
    {
        console.log("Ordinateur a gagné");
        iaWin+=1;
        console.log(iaWin);
        iaScore.textContent = iaWin;
    }
}

function UserClickScissors()
{

    robot = Math.floor(Math.random() * (max - min) + min);

    if(robot == 1)
    {
        console.log("Ordinateur a gagné");
        iaWin+=1;
        iaScore.textContent = iaWin;
        
    }
    else if(robot == 2)
    {
        console.log("Bravo, vous avez gagné");
        playerWin+=1;
        playerScore.textContent = playerWin;
    }
    else if(robot == 3)
    {
        console.log("Egalité");
    }
}

//#endregion

function CheckTheWinner()
{   

    if(playerWin == 5)
    {
        roundPlayer += 1;
        playerWin = 0;
        textRoundPlayer.textContent = roundPlayer;
        playerScore.textContent = "0";

        iaWin = 0;
        textRoundIa.textContent = roundIa;
        iaScore.textContent = "0";

    }
    else if(iaWin == 5)
    {
        roundIa += 1;
        iaWin = 0;
        textRoundIa.textContent = roundIa;
        iaScore.textContent = "0";

        playerWin = 0;
        textRoundPlayer.textContent = roundPlayer;
        playerScore.textContent = "0";

    }

    if(textRoundPlayer.textContent == "10")
    {
        let jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
        displayEndGame.style.display = "flex";
        textEndGame.textContent = "PSG est champion de France bravo !!!!!";
        playerImgWin.style.display = "flex";
    }
    else if(textRoundIa.textContent == "10")
    {
        let jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
        displayEndGame.style.display = "flex";
        textEndGame.textContent = "Marseille est champion de France bravo !!!!!";
        iaImgWin.style.display = "flex";
    }
}

// function qui permet de reload le jeux
window.addEventListener("load", event => {
    document.querySelector(".reload-button").onclick = function() {
        location.reload(true);
    }
});



// récupérer les button de l'utilisateur
let tackle = document.getElementById("tackle");
let shoot = document.getElementById("shoot");
let dribble = document.getElementById("dribble");

let displayEndGame = document.querySelector("#endGame"); 
let textEndGame = document.querySelector("#endGame p");

console.log(displayEndGame);

// point de l'ordinateur et du joueur
let playerWin = 0;
let iaWin = 0;

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
        console.log("égalité");
    }
    else if(robot == 2)
    {
        console.log("Ordinateur qui gagné");
        iaWin+= 1;
        iaScore.textContent = iaWin;
    }
    else if(robot == 3)
    {
        console.log("Jouer 1 gagné");
        playerWin+=1;
        playerScore.textContent = playerWin;

    }
}

function UserClickPaper()
{
    robot = Math.floor(Math.random() * (max - min) + min);

    if(robot == 1)
    {
        console.log("Joueur 1 gagné");
        playerWin+=1;
        console.log(playerWin);
        playerScore.textContent = playerWin;
    }
    else if(robot == 2)
    {
        console.log("égalité");
    }
    else if(robot == 3)
    {
        console.log("Ordinateur gagné");
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
        console.log("Ordinateur gagné");
        iaWin+=1;
        iaScore.textContent = iaWin;
        
    }
    else if(robot == 2)
    {
        console.log("Jouer 1 gagné");
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

    if(playerWin == 10)
    {
        console.log("le joueur 1 vient de gagné la partie");
        let jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
        displayEndGame.style.display = "flex";
        textEndGame.textContent = "PSG est champion du monde bravo !!!!!";
    }
    else if(iaWin == 10)
    {
        console.log("l'ordinateur vient de gagné la partie");
        let jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
        displayEndGame.style.display = "flex";
        textEndGame.textContent = "Marseille est champion du monde bravo !!!!!";
    }
}


window.addEventListener("load", event => {
    document.querySelector(".reload-button").onclick = function() {
        location.reload(true);
    }
});


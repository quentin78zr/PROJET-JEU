// récupérer les button de l'utilisateur
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

// point de l'ordinateur et du joueur
let playerWin = 0;
let iaWin = 0;

// initialer un nombre aléatoire
let min= 1; 
let max= 4;  
let robot


//#region Gérer Le Clic De L'utilisateur

rock.addEventListener("click" , function(){
    if(paper.style.backgroundColor == "blue" || scissors.style.backgroundColor == "blue")
    {
        return;
    }
    else{
        rock.style.backgroundColor = "blue";
    }
    
    UserClickRock();
    CheckTheWinner();

});

paper.addEventListener("click" , function(){
    if(rock.style.backgroundColor == "blue" || scissors.style.backgroundColor == "blue")
    {
        return;
    }
    else{
        paper.style.backgroundColor = "blue";
    }

    UserClickPaper();
    CheckTheWinner();

});

scissors.addEventListener("click" , function(){
    if(paper.style.backgroundColor == "blue" || rock.style.backgroundColor == "blue")
    {
        return;
    }
    else{
        scissors.style.backgroundColor = "blue";
    }

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
    }
    else if(robot == 3)
    {
        console.log("Jouer 1 gagné");
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
    }
}

function UserClickScissors()
{

    robot = Math.floor(Math.random() * (max - min) + min);

    if(robot == 1)
    {
        console.log("Ordinateur gagné");
        iaWin+=1;
    }
    else if(robot == 2)
    {
        console.log("Jouer 1 gagné");
        playerWin+=1;
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
    }
    else if(iaWin == 10)
    {
        console.log("l'ordinateur vient de gagné la partie");
    }
}

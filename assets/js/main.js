/* Déclaration de variables : 
- nb de victoires IA,
- nb de victoires du joueur,
- pierre,
- feuille,
- ciseaux, */

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let buttons = document.querySelectorAll("button");

// Parcourir les lettres des boutons
for (let i = 0; i < buttons.length; i++){ 
// Si le bouton HTML est cliqué alors lancer la partie
buttons[i].addEventListener('click',function() {
    const joueur = buttons[i].innerHTML;
    console.log(joueur);
    const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
    console.log(robot);

    let round = 0
    let winIA = 0;
    let defaitePlayer = 0;
    let winPlayer = 0;
    // Tant que le nb de manches <= 10 
    while (round <= 10) {
        // Si l'IA a choisi papier et le joueur ciseau ou si l'IA a choisi ciseaux et le joueur pierre ou si l'IA a choisi pierre et le joueur feuille alors gagné 
        if((robot === "Feuille" && joueur === "Ciseaux") || (robot === "Ciseaux" && joueur === "Pierre") || (robot === "Pierre" && joueur === "Feuille")) {
        console.log("Manche gagnée !");
        winPlayer += 1;
        console.log(`Vous avez pour l'instant ${winPlayer} victoire(s)`);
        }

        // Cas d'égalité
        else if(robot === joueur) {
            console.log("Egalité");
        }

        // Sinon perdu
        else {
            console.log("Manche perdue");
            winIA += 1;
            defaitePlayer += 1;
            console.log(`L'ordinateur a pour l'instant ${winIA} victoire(s)`);
        }

        // Compteur de victoires et défaites
        console.log(`Vous avez actuellement ${winPlayer} victoire(s) et ${defaitePlayer} défaite(s)`);
        round++
}
    // Si le nb de victoires d'IA ou du joueur est > 10 alors rejouer ou pas
    if (winIA > 10 || winPlayer > 10) {
        let replay = window.prompt("Voulez-vous rejouer ? Oui ou non");
    }
    return;
    // Afficher le %age de victoires contre l'ordinateur
});
}

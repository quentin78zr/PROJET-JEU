const startPlay = document.querySelectorAll("button");
// const result = document.querySelector(".resultat");

for (let i = 0; i < startPlay.length; i++) {
  startPlay[i].addEventListener('click', function() {
    const player = startPlay[i].innerHTML;
    const IA = startPlay[Math.floor(Math.random() * startPlay.length)].innerHTML;
    let result = "";
    let round = 10;
    // result.innerHTML = player + "       " + IA;
    while (round < 10) {
      if (player===IA) {
        resultat = "Egalité";
      }
      else if ((player === "Pierre" && IA === "Ciseaux") || (player === "Ciseaux" && IA === "Feuilles") || (player === "Feuilles") && (IA === "Pierre")) {
        resultat = "Gagné";
      }
      else {
        resultat = "Perdu";
      }
    }
  document.querySelector(".resultat").innerHTML = `
  Joueur : ${player} </br>
  Robot : ${IA} <br/>
  Résultat : ${result}
`  ;
    
  });
  
  
}

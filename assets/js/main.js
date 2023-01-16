const buttons = document.querySelectorAll("button");
// const resultat = document.querySelector(".resultat");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    const joueur = buttons[i].innerHTML;
    const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
    let resultat = "";
    let round = 10;
    // resultat.innerHTML = joueur + "       " + robot;
    while (round < 10) {
      if (joueur===robot) {
        resultat = "Egalité";
      }
      else if ((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Ciseaux" && robot === "Feuilles") || (joueur === "Feuilles") && (robot === "Pierre")) {
        resultat = "Gagné";
      }
      else {
        resultat = "Perdu";
      }
    }
  document.querySelector(".resultat").innerHTML = `
  Joueur : ${joueur} </br>
  Robot : ${robot} <br/>
  Résultat : ${resultat}
`  ;
    
    // SAUVEGARDE 
    if(typeof localStorage!='undefined') {
  // Récupération de la valeur dans web storage
  var nbVisit = localStorage.getItem('visites');
  // Vérification de la présence du compteur
  if(nbVisit!=null) {
    // Si oui, on convertit en nombre entier la chaîne de texte qui fut stockée
    nbVisit = parseInt(nbvisites);
  } else {
    nbVisit = 1;
  }
  // Incrémentation
  nbVisit++;
  // Stockage à nouveau en attendant la prochaine visite...
  localStorage.setItem('visites',nbVisit);
  // Affichage dans la page
  document.getElementById('visites').innerHTML = nbVisit;
} else {
  alert("localStorage n'est pas supporté");
}
    
  });
  
  
}

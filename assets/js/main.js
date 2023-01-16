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
    
    if(typeof localStorage!='undefined') {
  // Récupération de la valeur dans web storage
  var nbvisites = localStorage.getItem('visites');
  // Vérification de la présence du compteur
  if(nbvisites!=null) {
    // Si oui, on convertit en nombre entier la chaîne de texte qui fut stockée
    nbvisites = parseInt(nbvisites);
  } else {
    nbvisites = 1;
  }
  // Incrémentation
  nbvisites++;
  // Stockage à nouveau en attendant la prochaine visite...
  localStorage.setItem('visites',nbvisites);
  // Affichage dans la page
  document.getElementById('visites').innerHTML = nbvisites;
} else {
  alert("localStorage n'est pas supporté");
}
    
  });
  
  
}

let nEtages = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"); 
/*fonction de dessin de la pyramide*/
function dessinPyramide(n) {
    for (let i = 0; i < n; i++) {
        let ligne = '';
        for (let j = 1; j < n-i; j++) {
          ligne = ligne + ' ';
        }
  		for (let k = 1; k <= (2*i+1); k++) {
          ligne = ligne + '#';
        }
        console.log(ligne);
      }
    }


if (nEtages < 25) { 
  	console.log("Le nombre d'étages de votre pyramide est:" + nEtages);
  	console.log('Voici la pyramide :');
	dessinPyramide(nEtages);
};



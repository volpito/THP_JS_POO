n = prompt("Combien d'étages veux-tu pour cette pyramide de merde ?");
let i = 1
//on "repeat" de moins en moins les caractères " " et de plus en plus les "#", 
//jusqu'à la limite fixée par le joueur 
function pyr(n) {
  while (n > 0) { 
    console.log(" ".repeat(n - 1) + "#".repeat(i));
    n --;
    i++;
  }
}

pyr(n);
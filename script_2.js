n = prompt("De quel nombre veux-tu calculer la factorielle ?");
let answer = 1;
//on multiplie le nombre N par lui même puis on le décrémente et on recommence
function factorial(n){  
  while (n > 0) {
    answer = answer * n;
    n--;
  }
console.log("Le résultat est : "+ answer);
}

factorial(n)
const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

//Est-ce que tous les livres ont été au moins empruntés une fois ?
function rent() {
  let i = 0;
  while (i < 12) {
    if (books[i].rented != 0) {
    i++;
    }
    else {
      console.log("Nope !");
      return 0;
    }
    console.log("Ils ont tous été empruntés au moins une fois !");
  }
}

//Quel est livre le plus emprunté ?
function most() {
  books[12] = {rented: 0};
  let i = 0;
  while (i < 12) {
    if (books[12].rented < books[i].rented) {
      books[12] = books[i];
    }
    i++;
  }
  console.log("Voici le livre le plus emprunté : " + books[12].title)
}

//Quel est le livre le moins emprunté ?
function least() {
  let i = 0;
  while (i < 12) {
    if (books[12].rented > books[i].rented) {
      books[12] = books[i];
    }
    i++;
  }
  console.log("Voici le livre le moins emprunté : " + books[12].title)
}

//Trouve le livre avec l'ID: 873495 ;
function find(int) {
  let i = 0;
  while (i < 12) {
    if (books[i].id === int) {
      console.log("Trouvé ! C'est " + books[i].title);
    }
    i++;
  }
}

//Supprime le livre avec l'ID: 133712 ;
function destroy(int) {
  let i = 0;
  let j = 0;
  while (i < 12) {
    if (books[i].id === int) {
      console.log("On va détruire " + books[i].title);
      books[i].shift;
    }
    i++;
  }
}

//Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
function alphaName(){
  
  function compare(a, b) {
    console.log("#### Et pour finir, voici notre liste alphabétique :");
    const lastA = (a).title.toUpperCase();
    const lastB = (b).title.toUpperCase();

    let comparison = 0;
    if (lastA > lastB) {
      comparison = 1;
    } else if (lastA < lastB) {
      comparison = -1;
    }
    return comparison;
  }
console.log(books.sort(compare));
}

rent();
most();
least();
find(873495);
destroy(133712);
console.log(books);
alphaName(books);



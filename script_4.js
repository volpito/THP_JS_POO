const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

//Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;
function sevenTies() {
  console.log("#### Voici les enfants des années 70 :");
  let i = 0;
  while (i < 18) {
    if (entrepreneurs[i].year > 1969 && entrepreneurs[i].year < 1980) {
    console.log(entrepreneurs[i]);
    }
    i++;
  }
}

//Sors une array qui contient le prénom et le nom des entrepreneurs ;
function names() {
  console.log("#### Bienvenue dans notre convention des petits génies. ####");
  let i = 0;
  while (i < 18) {
    a = [entrepreneurs[i].first, entrepreneurs[i].last];
    console.log("Je vous présente " + a.join(" "));
    i++;
  }
}

//Quel âge aurait chaque inventeur aujourd'hui ?
function ageNow() {
  console.log("#### Quel âge ont-ils ? ####");
  let i = 0;
  while (i < 18) {
    age = 2020 - entrepreneurs[i].year;
    console.log(entrepreneurs[i].first + " aurait " + age +" ans aujourd'hui !");
    i++;  
  }
}

//Trie les entrepreneurs par ordre alphabétique du nom de famille.
function alphaName(){
  
  function compare(a, b) {
    console.log("#### Et pour finir, voici notre liste alphabétique :");
    const lastA = a.last.toUpperCase();
    const lastB = b.last.toUpperCase();

    let comparison = 0;
    if (lastA > lastB) {
      comparison = 1;
    } else if (lastA < lastB) {
      comparison = -1;
    }
    return comparison;
  }
console.log(entrepreneurs.sort(compare));
}


sevenTies();
names();
ageNow();
alphaName();
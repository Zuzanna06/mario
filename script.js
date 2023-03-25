// function surface(x, y){
//    console.log(x * y);
// }
// surface(2, 2);



//funtion flecher

// const getSurface=(long, large)=> {
//    console.log(long * large);
// }
// getSurface(2, 2);

// var apprenant = {
//     nom : "Doe",
//     prenom : "John",
//     age : 30,

//     //  clog :() => {
//         //   console.log(this.nom)
//     //  }


//     clog : function () {
//     console.log(this.nom)
//     }

// };

// apprenant.clog();










// //déclaration de la fonction
// function surface(x,y){
//     console.log(x*y);
//  }
 
//  //appel de la fonction
//  surface(2,2);
 
 
//  //fonction fléchée
//  const getSurface = (Long, Larg)=> {
//      console.log(Long*Larg);
//  }
 
//  getSurface(3,3);
 
//  //objet
//  // nom de l'objet apprenant
//  // deux attributs nom et prenom (séparé par des virgules)
//  var apprenant = {
//      nom : "Doe", 
//      prenom : "John",
//      age : 30,
//      clog : function (){
//         console.log(this.nom)
//      }
 
//      // clog:() => { console.log(this.nom)};
//  };
 
//  // le contexte : ne peut être invoqué que dans l'objet même, notion de portée
//  // console.log(apprenant.clog); // on accède à la valeur de l'attribut de l'objet
//  apprenant.clog(); // attribut de type fonction
 
//  // une fonction avec le mot clé function est accessible depuis l'extérieur de l'objet tandis qu'une fonction fléchée est cantonnée à l'intérieur de l'objet

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 


//When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// funtion constructeur
const results = document.querySelector('.results');

function Jeux(nom, date, console, descriptions, image) {
    this.nom = nom,
    this.date = date,
    this.console = console,
    this.descriptions = descriptions,
    this.image = image
}

let maConsole1 = new Jeux("Super Mario Bros", 1985, "NES", "Super Mario Bros. est un jeu vidéo de plates-formes à défilement horizontal développé par Nintendo R&D4 et édité par Nintendo. Il est sorti sur Famicom au Japon en 1985 puis sur Nintendo Entertainment System en Amérique du Nord la même année et en 1987 en Europe. Il s'agit du premier jeu de la série Super Mario.", "https://mario.nintendo.com/static/fd723b2893d4d2b39ef71bfdb4e3329c/579b4/mario-background.png");
let maConsole2 = new Jeux("Super Mario All-Stars", 1993, "SNES", "Super Mario Bros. est un jeu vidéo de plates-formes à défilement horizontal développé par Nintendo R&D4 et édité par Nintendo. Il est sorti sur Famicom au Japon en 1985 puis sur Nintendo Entertainment System en Amérique du Nord la même année et en 1987 en Europe. Il s'agit du premier jeu de la série Super Mario.");
let maConsole3 = new Jeux("Super Mario Land 3", 1994, "Game Boy", "Super Mario Bros. est un jeu vidéo de plates-formes à défilement horizontal développé par Nintendo R&D4 et édité par Nintendo. Il est sorti sur Famicom au Japon en 1985 puis sur Nintendo Entertainment System en Amérique du Nord la même année et en 1987 en Europe. Il s'agit du premier jeu de la série Super Mario.");
let maConsole4 = new Jeux("Super Mario Galaxy", 2007, "Wii", "Super Mario Bros. est un jeu vidéo de plates-formes à défilement horizontal développé par Nintendo R&D4 et édité par Nintendo. Il est sorti sur Famicom au Japon en 1985 puis sur Nintendo Entertainment System en Amérique du Nord la même année et en 1987 en Europe. Il s'agit du premier jeu de la série Super Mario.");
let maConsole5 = new Jeux("Super Mario - 64 / 64", 1996, "Nintendo 64", "Super Mario Bros. est un jeu vidéo de plates-formes à défilement horizontal développé par Nintendo R&D4 et édité par Nintendo. Il est sorti sur Famicom au Japon en 1985 puis sur Nintendo Entertainment System en Amérique du Nord la même année et en 1987 en Europe. Il s'agit du premier jeu de la série Super Mario.");
let maConsole6 = new Jeux("Super Mario Bros. Deluxe", 1999, "Game Boy Color", "Super Mario Bros. est un jeu vidéo de plates-formes à défilement horizontal développé par Nintendo R&D4 et édité par Nintendo. Il est sorti sur Famicom au Japon en 1985 puis sur Nintendo Entertainment System en Amérique du Nord la même année et en 1987 en Europe. Il s'agit du premier jeu de la série Super Mario.");
let maConsole7 = new Jeux("Super Mario Advance", 2000, "Game Boy Advance", "Super Mario Bros. est un jeu vidéo de plates-formes à défilement horizontal développé par Nintendo R&D4 et édité par Nintendo. Il est sorti sur Famicom au Japon en 1985 puis sur Nintendo Entertainment System en Amérique du Nord la même année et en 1987 en Europe. Il s'agit du premier jeu de la série Super Mario.");
let maConsole8 = new Jeux("Super Mario Galaxy", 2007, "Wii", "Super Mario Bros. est un jeu vidéo de plates-formes à défilement horizontal développé par Nintendo R&D4 et édité par Nintendo. Il est sorti sur Famicom au Japon en 1985 puis sur Nintendo Entertainment System en Amérique du Nord la même année et en 1987 en Europe. Il s'agit du premier jeu de la série Super Mario.");
let maConsole9 = new Jeux("Super Mario 3D World", 2013, "Wii U", "Super Mario Bros. est un jeu vidéo de plates-formes à défilement horizontal développé par Nintendo R&D4 et édité par Nintendo. Il est sorti sur Famicom au Japon en 1985 puis sur Nintendo Entertainment System en Amérique du Nord la même année et en 1987 en Europe. Il s'agit du premier jeu de la série Super Mario.");



// console.log(maConsole);

// let maCollection = new Object;
// // maCollection = Object.assign({}, maConsole1, maConsole3) pas pour sa

let maCollestion = { ...{maConsole1}, ...{maConsole2}, ...{maConsole3}, ...{maConsole4}, ...{maConsole5}, ...{maConsole6}, ...{maConsole7}, ...{maConsole8}, ...{maConsole9}};

for (const key in maCollestion)
{
    console.log(maCollestion[key]);
}


// Object.values(maCollection).map(
//     (jeu) => {
//         console.log(jeu.console)
//         console.log(jeu.name)
//         console.log(jeu.year)
//     }
// )


results.innerHTML = Object.values(maCollestion).map( (jeu, index) =>`
    <div class="card">
        <h2>Titre : ${jeu.nom}</h2>
        <h3>Console : ${jeu.console}</h3>
        <h4>Année : ${jeu.date}</h4>
        <button id='maConsole${index+1}'>OPEN</button>
        
    </div>
`).join("");

// tout les le balise html se sont des objet

let boutons = document.getElementsByTagName('button');
console.log(boutons);
let jeuTitre = document.getElementById("titre");
let jeuDate = document.getElementById("date");
let jeuConsole = document.getElementById("console");
let jeuDescriptions = document.getElementById("descriptions");
let jeuImage = document.getElementById("image")

for (let index = 0; index < boutons.length; index++) {
    console.log(boutons[index])
    boutons[index].addEventListener('click', e => {
        console.log(boutons[index].id);
        let key = boutons[index].id; // je stock chaques button avec leurs id
        console.log(maCollestion[key]); 
        jeuTitre.innerText = maCollestion[key].nom;
        jeuDate.innerText = maCollestion[key].date;
        jeuConsole.innerText = maCollestion[key].console;
        jeuDescriptions.innerText = maCollestion[key].descriptions;
        jeuImage.src = maCollestion[key].image;
        modal.style.display = "block";
    })
}



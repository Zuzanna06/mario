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




// funtion constructeur
const results = document.querySelector('.results');

function Jeux(nom, date, console) {
    this.nom = nom,
    this.date = date,
    this.console = console
}

let maConsole = new Jeux("Super Mario Bros", 1985, "NES");
let maConsole1 = new Jeux("Super Mario All-Stars", 1993, "SNES");
let maConsole2 = new Jeux("Super Mario Land 3", 1994, "Game Boy");
let maConsole3 = new Jeux("Super Mario Galaxy", 2007, "Wii");
let maConsole4 = new Jeux("Super Mario - 64 / 64", 1996, "Nintendo 64");
let maConsole5 = new Jeux("Super Mario Bros. Deluxe", 1999, "Game Boy Color");
let maConsole6 = new Jeux("Super Mario Advance", 2000, "Game Boy Advance");
let maConsole7 = new Jeux("Super Mario Galaxy", 2007, "Wii");
let maConsole8 = new Jeux("Super Mario 3D World", 2013, "Wii U");



// console.log(maConsole);

// let maCollection = new Object;
// // maCollection = Object.assign({}, maConsole1, maConsole3) pas pour sa

let maCollestion = { ...{maConsole}, ...{maConsole1}, ...{maConsole2}, ...{maConsole3}, ...{maConsole4}, ...{maConsole5}, ...{maConsole6}, ...{maConsole7}, ...{maConsole8}};

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


results.innerHTML = Object.values(maCollestion).map( jeu =>`
    <div class="card">
        <h2>Titre : ${jeu.nom}</h2>
        <h3>Console : ${jeu.console}</h3>
        <h4>Année : ${jeu.date}</h4>
        <button></button>
        
    </div>
`).join("");

// tout les le balise html se sont des objet
var prenom = "zuzanna";
var codePostale = "06700";
var bonjour = "je m'apelle " + prenom;

console.log(prenom + " " + codePostale);
console.log(bonjour);

var adresse = "j'habite dans le " + codePostale;
console.log(adresse);

var x = 5;
var y = 10;
var addition = x + y;
var division = y / x;
var multiplication = x * y;

console.log("l'addition de " + x + " + " + y + " est egale a " + addition);
console.log("l'division de " + y + " / " + x + " est egale a " + division);

console.log("hello word");

let color;
color = "rouge";

const msg = "hello";
console.log(msg);

var a = 66;
var b = 12;
var result = a + b;

console.log(result);

// const usersAge = window.prompt("quelle age avez vous?");
// console.log(usersAge);

// const prenom1 = window.prompt("quelle est ton prenoms?");
// console.log("bonjour " + prenom1);

//date du jour dynamique

let jours = [
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
  "dimanche",
];
let mois = ["janvier", "fevrier", "mars", "avril", "mai"];

console.log(jours[0]);

console.log(jours[2] + " 2 " + mois[2]);

//parcourir un tableau
for (let index = 0; index < jours.length; index++) {
  console.log(jours[index]);
}

for (let index = 0; index < mois.length; index++) {
  console.log(mois[index]);
}

console.log("*******");
console.log("*******");

//recuperer toutes les valeurs d'un tableau
jours.map((value) => {
  console.log(value);
});

mois.map((element) => {
  console.log(element);
});



console.log("*******");
//aleatoir
console.log("*******");


console.log(Math.random());

var myRandom = Math.floor(Math.random() * 10);
console.log(myRandom);

var myRandomJours = Math.floor(Math.random() * jours.length);
console.log(typeof myRandomJours);

console.log(jours[myRandomJours]);

var myRandomMois = Math.floor(Math.random() * mois.length);
console.log(typeof myRandomMois);

console.log(mois[myRandomMois]);



var myRandom100 = Math.floor(Math.random() * 100);
console.log(myRandom100);


console.log("*******");

console.log("*******");

function myFun(){
    console.log("ma premier Fun");
}
myFun();


function myFun2(){          //dans la funtion toujour ()
    console.log(25);
}
myFun2();
console.log(25);



function multi(x){          // x c'est parametre
console.log(x*2);
}
multi(10);


function hello(prenom){
    console.log("Bonjour " + prenom);
}
hello("zuzanna");


function semaine(Jo){
console.log(jours[Jo])
}
semaine(3);


function fMois(Mo){
    console.log(mois[Mo])
}
fMois(1);


function multi2(a,b){
    console.log(a*b)
}
function rMulti2(a,b){
    return a*b;
}

multi2(2,5);
console.log(rMulti2(2,5));
let res = rMulti2(10,2);


//objets et methodes, condititions


let exempleArray = ['A','B','C']
//console.log(exempleArray['0']);

for (let index = 0; index < exempleArray.length; index++) {
  console.log(exempleArray[index]);
}











let myArray = ['A','B','C'];
myArray[0]='D';
myArray[1]='E';
myArray[2]='F';

for (let index = 0; index < myArray.length; index++) {
  console.log(myArray[index]);
  
}


let myT = [1, 2, 3];
//myT[0] ++ ; 
//myT [0] += 1;
for (let index = 0; index < myT.length; index++) {
myT[index] += 1;
  
}
console.log(myT);



let myTabt = [1,2,3];
myTabt.push(4);
console.log(myTabt);
let somme = myTabt[2] + myTabt[3]
myTabt.push(somme);



//M Fibonacci
let fibo = [0,1,1];
//for (index = 1; fibo[index+1+fibo[index]] < 50; index++) 
for (index = 1; fibo[index] < 50; index++) 
{
  fibo.push(fibo[index]+fibo[index+1])
  console.log(fibo)
}


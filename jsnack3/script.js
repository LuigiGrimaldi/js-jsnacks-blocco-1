// l software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let somma = 0;


for(let i = 0; i < 10; i++){
   let number = Number(prompt('inserisci un numero'));
   somma += number;
}

console.log(somma);

let volte = 10;
let sum = 0;
let i = 0;

while( i <= volte){
   let number = Number(prompt('inserisci un numero'));
   sum += number;
   i++
}
console.log(sum);


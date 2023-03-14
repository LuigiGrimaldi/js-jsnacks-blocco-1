// l software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

const number = 0;
let somma;


for(let i = 0; i < 10; i++){
   number = parseInt(prompt('inserisci un numero'));
   somma += number;
}

console.log(somma);


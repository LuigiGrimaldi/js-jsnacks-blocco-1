// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

const firstNumber = prompt('scrivi un numero');
const secondtNumber = prompt('scrivi un altro numero');


if(firstNumber < secondtNumber) {
    console.log(secondtNumber);
}else if (secondtNumber < firstNumber){
    console.log(firstNumber);
}




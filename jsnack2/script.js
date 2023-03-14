// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const primaParola = prompt('inserisci una parola');
const secondaParola = prompt('inserisci un\'altra parola');

if(primaParola > secondaParola){
    console.log('primaParola è maggiore');
}else if(primaParola < secondaParola){
    console.log('secondaParola è maggiore');
}else{
    console.log('le due parole sono uguali');
}


// Snack 4 (sia con for che con while):
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const invitati = [
    'invitato1',
    'invitato2',
    'invitato3',
    'invitato4',
    'invitato5'
]

// const nome = prompt('inserisci il tuo nome')
// let hasAccess = false;
// for(let i = 0; i < invitati.length; i++){
//     if(invitati[i] == nome){
//         hasAccess = true;
//     }
// }
// if(hasAccess){
//     console.log('accesso consentito');
// }else{
//     console.log('accesso non consentito');

// }




const nomeWhile = prompt('inserisci il tuo nome')
let hasAccesswhile = false;
let i = 0;
while( i < invitati.length){
    if(invitati[i] == nomeWhile){
        hasAccesswhile = true;
    }

    i++
}
if(hasAccesswhile){
    console.log('accesso consentito');
}else{
    console.log('accesso non consentito');

}
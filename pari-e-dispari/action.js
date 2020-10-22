var n_utente; //dichiarazione variabile che conterrà il numero scelto dall'utente.
do{ //ciclo do-while per assicurare alla variabile utente la sua permanenza nell'intervallo chiuso e limitato [0,1].
var utente = inserimento();
} while (utente < 0 || utente > 1)
var n_cpu; //dichiarazione variabile che conterrà il numero generato dalla cpu.
if(utente == 0){ //nel caso in cui l'utente abbia inserito 0, logica conseguenza sarà la cpu = 1, altrimenti 0.
    var cpu = 1;
} else {
    var cpu = 0;
}
n_utente = parseInt(prompt('Inserisci il tuo numero: ')); //Inserimento numero da utente.
n_cpu = Math.floor(Math.random() * 100) + 1; //Si genera un numero casuale compreso tra 1 e 100.
console.log('Numero inserito dalla cpu: ' + n_cpu); //Lo si visualizza a schermo.
var risultato = somma(n_utente,n_cpu); //Assegno a risultato il valore ritornato dalla funzione somma(n,m).
console.log('Risultato della somma: ' + risultato); //Lo si visualizza a schermo.

if(risultato%2 == 0){ //Se il numero è pari, lo si visualizza a schermo, altrimenti verrà visualizzato dispari.
    console.log('Pari!');
} else {
    console.log('Dispari!');
}


function inserimento(){
    var s = parseInt(prompt('Inserisci 0: Pari, 1: Dispari: '));
    return s;
}

function somma(a,b){
    var c;
    c = a+b;
    return c;
}

var parola = prompt('Inserisci la parola: ');
var check = palindroma(parola);

if(check){
    console.log('La parola è palindroma');
}else {
    console.log('La parola non è palindroma');
}


function rovescia(parola){
var array_caratteri = parola.split('');
var array_caratteri_al_contrario = array_caratteri.reverse();
var parola_al_contrario = array_caratteri_al_contrario.join('');
return parola_al_contrario;
}
function palindroma(parola){
    var parola_al_contrario = rovescia(parola);
    if(parola == parola_al_contrario){
        return true;
    } else {
        return false;
    }
}

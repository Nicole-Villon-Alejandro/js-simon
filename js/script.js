/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
**NOTA**: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.*/

const numbersList = document.getElementById('numbers-list')
const numArray = []

function numRandom(min,max){
    return Math.floor(Math.random() * max) + min;

}

for( let i = 0; numArray.length < 5; i++ ){

    let numRandomico = numRandom( 1, 50 )

    console.log('il numero random è: ${numRandomico}' )

    if( !(numArray.includes( numRandomico ) ) ){
        numArray.push( numRandomico )
    }

    console.log( numArray )
}    


for( let i = 0; i < numArray.length; i++ ){
    numbersList.innerHTML = numArray[i]
}    
   

let counter = 3

const countdown = document.getElementById('countdown')
const answerForm = document.getElementById('answer-form')
const instructions = document.getElementById('instructions')

const timer = setInterval( function(){
    countdown.innerHTML = counter--

    if( counter < 0 ){
        clearInterval( timer )
        numbersList.classList.add('d-none')
        instructions.classList.add('d-none')
        answerForm.classList.remove('d-none')
    }
}, 1000)




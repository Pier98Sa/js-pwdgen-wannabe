let name = prompt("Inserisci il tuo nome");
name = name.replaceAll(" ", "");

let surname = prompt("Inserisci il tuo cognome");
surname = surname.replaceAll(" ", "");
console.log(surname)

let color = prompt("Inserisci il tuo colore preferito");
color = color.replaceAll(" ", "");

const number = 21;


let password = `La Password da noi consigliata è : ${name}${surname}${color}${number}`;

document.getElementById('password').innerHTML = password;
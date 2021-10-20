const firstName = prompt("Inserisci il tuo nome");
const lastName = prompt("Inserisci il tuo cognome");
const favoriteColor = prompt("Inserisci il tuo colore preferito");
const number = '21';

const password = firstName + lastName + favoriteColor + number;

console.log(password);

document.getElementById('pswgenerated').innerHTML = password;
document.getElementById('pswlenght').innerHTML = password.length;


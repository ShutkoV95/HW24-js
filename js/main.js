let optionPlayer1 = prompt('Гравець 1, напишіть свій вибір: камінь, ножниці чи папір ?');
let optionPlayer2 = prompt('Гравець 2, напишіть свій вибір: камінь, ножниці чи папір ?');
let option1 = 'камінь';
let option2 = 'ножниці';
let option3 = 'папір';


if (optionPlayer1 == option1 && optionPlayer2 == option1) {
    alert(' Нічия !');
}

if (optionPlayer1 == option1 && optionPlayer2 == option2) {
    alert(' Переміг Гравець 1 ! ');
}

if (optionPlayer1 == option1 && optionPlayer2 == option3) {
    alert(' Переміг Гравець 2 ! ');
}

if (optionPlayer1 == option2 && optionPlayer2 == option1) {
    alert(' Переміг Гравець 2 ! ');
}

if (optionPlayer1 == option2 && optionPlayer2 == option2) {
    alert(' Нічия !');
}

if (optionPlayer1 == option2 && optionPlayer2 == option3) {
    alert(' Переміг Гравець 1 ! ');
}

if (optionPlayer1 == option3 && optionPlayer2 == option1) {
    alert(' Переміг Гравець 1 ! ');
}

if (optionPlayer1 == option3 && optionPlayer2 == option2) {
    alert(' Переміг Гравець 2 !');
}

if (optionPlayer1 == option3 && optionPlayer2 == option3) {
    alert(' Нічия ! ');
}
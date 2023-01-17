"use strict"

const questionInput = document.getElementById('question-input');
const showAnswerButton = document.getElementById('showAnswer');
const answerBlock = document.getElementById('answerBlock');
const answerInput = document.getElementById('answerInput');
const nextQuestion = document.getElementById('nextQuestion');

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const questions = [
    ["Пакистан", "Исламабад"],
    ["Шри-Ланка", "Котте"],
    ["Бруней", "Бандар-Сери-Бегаван"],
    ["Восточный Тимор", "Дили"],
    ["Вьетнам", "Ханой"],
    ["Индонезия", "Джакарта"],
    ["Камбоджа", "Пномпень"],
    ["Лаос", "Вьентьян"],
    ["Малайзия", "Куала-Лумпур"],
    ["Мьянма", "Нейпьидо"],
    ["Сингапур", "Сингапур"],
    ["Таиланд", "Бангкок"],
    ["Филиппины", "Манила"],
    ["Китай", "Пекин"],
    ["КНДР", "Пхеньян"],
    ["Монголия", "Улан-Батор"],
    ["Р. Корея", "Сеул"],
    ["Япония", "Токио"],
    ["Казахстан", "Астана"],
    ["Узбекистан", "Ташкент"],
    ["Киргизия", "Бишкек"],
    ["Таджикистан", "Душанбе"],
    ["Туркмения", "Ашхабад"],
    ["Грузия", "Тбилиси"],
    ["Армения", "Ереван"],
    ["Азербайджан", "Баку"],
    ["Афганистан", "Кабул"],
    ["Бахрейн", "Манама"],
    ["Израиль", "Тель-Авив"],
    ["Иордания", "Амман"],
    ["Ирак", "Багдад"],
    ["Иран", "Иегеран"],
    ["Йемен", "Сана"],
    ["Катар", "Доха"],
    ["Кипр", "Никосия"],
    ["Кувейт", "Эль-Кувейт"],
    ["Ливан", "Бейрут"],
    ["ОАЭ", "Абу-Даби"],
    ["Оман", "Маскат"],
    ["Саудовская Аравия", "Эль-Рияд"],
    ["Сирия", "Дамаск"],
    ["Турция", "Анкара"],
    ["Бангладеш", "Дакка"],
    ["Бутан", "Тхимпху"],
    ["Индия", "Нью-Дели"],
    ["Мальд. республика", "Мале"],
    ["Непал", "Катманду"]
]

function generate(arr) {
    answerBlock.classList.remove('active');
    let arLen = arr.length;
    let rand = getRandomInRange(0, arLen - 1);
    questionInput.value = arr[rand][0];
    answerInput.innerHTML = arr[rand][1];
}

function toggleClass() {
    answerBlock.classList.add('active');
}

generate(questions);
nextQuestion.onclick = function() {
    generate(questions);
};
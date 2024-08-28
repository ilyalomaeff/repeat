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
    ["Алжир", "Алжир"],
    ["Египет", "Каир"],
    ["Ливия", "Трипали"],
    ["Марокко", "Рабат"],
    ["Судан", "Хартум"],
    ["Ю.Судан", "Джуба"],
    ["Тунис", "Тунис"],
    ["Бенин", "Порто-Ново"],
    ["Буркана-Фасо", "Уагадугу"],
    ["Гамбия", "Баншул"],
    ["Гана", "Аккра"],
    ["Гвинея", "Конакри"],
    ["Гвинея-Бисау", "Бисау"],
    ["Кот-Д'ивуар", "Ямусукро"],
    ["Либерия", "Монровал"],
    ["Мавритания", "Нуакшот"],
    ["Мали", "Бамако"],
    ["Нигер", "Ниамей"],
    ["Нигерия", "Абудша"],
    ["Сенегал", "Дакар"],
    ["Сьерра-Леоне", "Фритаун"],
    ["Того", "Ломе"],
    ["Ангола", "Луанда"],
    ["Габон", "Либревило"],
    ["Конго", "Браззавило"],
    ["ЦАР", "Банги"],
    ["Чад", "Ндгиамена"],
    ["Экваториальная Гвинея", "Малабо"],
    ["Бурунди", "Гитега"],
    ["Джибути", "Джибути"],
    ["Замбия", "Лусака"],
    ["Зимбабве", "Хараре"],
    ["Кения", "Найроби"],
    ["Мадагаскар", "Антананариву"],
    ["Малави", "Лилонгви"],
    ["Мозамбик", "Мапуту"],
    ["Руанда", "Кигали"],
    ["Сомали", "Могадишо"],
    ["Танзания", "Додома"],
    ["Уганда", "Кампала"],
    ["Эритрея", "Асмера"],
    ["Эфиопия", "Аддис-Абеба"],
    ["Ботсвана", "Габороне"],
    ["Лесото", "Масеру"],
    ["Намибия", "Виндхук"],
    ["Эсватини", "Мбабане"],
    ["ЮАР", "Претория"],
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
nextQuestion.addEventListener("click", () => {
    generate(questions);
});

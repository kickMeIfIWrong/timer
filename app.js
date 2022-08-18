const btn1 = document.querySelector("#button_start"),
  btn2 = document.querySelector("#button_stop"),
  btn3 = document.querySelector("#button_reset"),
  clock = document.querySelector(".clock");

let message = document.querySelector("#message");

let valueMin = 20, // так просто удобнее на этом этапе
  valueSec = 0; // я мог бы и прямой вывод сделать, но тебе было бы непонятно

let timer;

clock.innerHTML = `${valueMin}:0${valueSec}`; // вывод начальных значений

message.onclick = () => alertprompt();
btn1.onclick = () => start(); // сокращенная запись события клик
btn2.onclick = () => stopInterval(); // любое событие вместо долгой писанины addEventListener можно так
btn3.onclick = () => resetInterval(); // просто к событию добавляем on. было click. стало onclick

const start = () => {
  // стрелочное написание функций. так как у тебя перед глазами твой вариант, то разница будет понятна
  if (valueMin > 0 && valueSec >= 0) {
    // стартуем опять, если только минут больше нуля и секунд тоже
    timer = setInterval(startInterval, 10);
  }
  console.log("start");
};

const startInterval = () => {
  let tempSec, // c временными просто удобнее. если напишу без них
    tempMin; // то ты не поймешь как начинающий

  valueSec--;

  if (valueMin === 0 && valueSec === 0) {
    // если все по нулям, то останавливаем
    clearInterval(timer);
  }
  if (valueSec <= 0 && valueMin > 0) {
    // проверяем секунды и чтоб минута не была 0
    valueSec = 59;
    valueMin--;
  }

  tempSec = valueSec < 10 ? "0" + valueSec : valueSec; // формируем вывод секунд и минут
  tempMin = valueMin < 10 ? "0" + valueMin : valueMin;

  clock.innerHTML =
    valueMin === 0 && valueSec === 0 ? `Конец` : `${tempMin}:${tempSec}`; // самый главный и единственный вывод
};

const stopInterval = () => {
  clearInterval(timer); // просто останавливаем на время
};

const resetInterval = () => {
  valueMin = 20; // возвращаем начальные значения
  valueSec = 0;
  clearInterval(timer);
  clock.innerHTML = `${valueMin}:0${valueSec}`; // выводим опять начальные
};

function alertprompt() {
  valueMin = +prompt("Задайте количество минут:", `${valueMin}`);
  clock.innerHTML = `${valueMin}:0${valueSec}`;
}

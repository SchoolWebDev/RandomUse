for (let i = 0; i < 25; i++) {
  const random = Math.floor(Math.random() * 100)
  const cellColor = (i % 2) ? 'middle' : ''

  document.querySelector('.scopeHidden > ul').innerHTML += `
    <li class="${cellColor}">${random}</li>
  `;
}

// Создаеться константа move в которой, в пикселях, вычисляем отступ необходимый
// для списка чтобы тот в свою очередь сдвинулся на n-ое кол-во пикселей

// Далее для более простой читабельности я использовал function expresion
// elm и elms которые просто заменяли мне querySelector и querySelectorAll

// В константе index я учел что мы начинаем не с первой ячейки а с середины, а середина
// в свою очередь может быть разной исходя и размера блока, после монипуляций я возвращаю
// в index не отступы, а ячейку которую в будущем смогу изменить или взять с нее значения

// В этом случае я просто поменял ей цвет на красный

function start() {
  const move = -150 * 15;
  const elm = (str) => document.querySelector(str);
  const elms = (str) => document.querySelectorAll(str);

  elm('.scopeHidden > ul').style.left = move + 'px';

  const index = -Math.floor((move + (elm('.scopeHidden').offsetWidth / 2) / -150) / 150) + 1

  elms('.scopeHidden > ul > li')[index].style.background = 'red';
}
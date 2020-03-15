/*
document.addEventListener("DOMContentLoaded", function(event) { 
//отслеживаем событие на сайте для выполнения функции
  const modal = document.querySelector('.modal');
  //обращаемся к модальному окну

  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
 //находим все элементы, которые имеют специальный атрибут data-toggle="modal"

  const closeBtn = document.querySelector('.modal__close');
 //закрытие модального окна

  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  //функция, которая включает или выключает модальное окно

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });
  //цикл, который перебирает все кнопки, которые попали в переменную "modalBtn"

  closeBtn.addEventListener('click', switchModal);
  //закрытие модального окна при нажатии на "крестик"

  document.addEventListener('keydown', function(event) {
    if (event.code == 'Escape') switchModal();
  });
  //закрытие модального окна при нажатии на клавишу Esc

  document.addEventListener('click', function(event) {
    if (event.target == modal) switchModal();
  });
  //закрытие модального окна кликом по пустому месту за его пределами

});
*/

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');

  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');

  });

  $(document).keydown(function(event) {
    if (event.code == 'Escape') 
    modal.toggleClass('modal--visible');
  });

  $(document).on('click', function(event) {
    if (modal.is(event.target))
    modal.toggleClass('modal--visible');
  });

});


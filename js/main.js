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

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next')
  var prev = $('.swiper-button-prev')
  var bullets = $('.swiper-pagination')

  next.css('left', prev.width() + bullets.width() + 42)
  bullets.css('left', prev.width() + 21)

  new WOW().init();

  //Валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // правило-объект
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      // правило-объект
      userPhone: {
        required: true,
        minlength: 17
      },
      // правило-объект
      userEmail: {
        required: true,
        email: true
      },
      policyCheckbox: "required"
    }, //сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не больше 15 букв",
      },
      userPhone: {
        required: "Заполните поле",
        minlength: "Номер телефона указан неполностью",
      },
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      },
      policyCheckbox: {
        required: "Необходимо проставить отметку"
      }
    }
  });

  $('.control__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // правило-объект
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      // правило-объект
      userPhone: {
        required: true,
        minlength: 17
      },
      policyCheckbox: "required"
    }, 
    //сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не больше 15 букв",
      },
      userPhone: {
        required: "Заполните поле",
        minlength: "Номер телефона указан неполностью",
      },
      policyCheckbox: {
        required: "Необходимо проставить отметку"
      }
    }
  });

  $('.footer__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // правило-объект
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      // правило-объект
      userPhone: {
        required: true,
        minlength: 17
      },
      // правило-объект
      userQuestion: {
        required: true
      },
      policyCheckbox: "required"
    },
    //сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не больше 15 букв",
      },
      userPhone: {
        required: "Заполните поле",
        minlength: "Номер телефона указан неполностью",
      },
      userQuestion: {
        required: "Заполните поле",
      },
      policyCheckbox: {
        required: "Необходимо проставить отметку"
      }
    }
  });

  // маска для телефона

  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
});


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
    },
    //отправка формы
    submitHandler: function(form) {
      $.ajax({
        type: "POST", //метод
        url: "send.php", //куда отправляется форма
        data: $(form).serialize(), //передача данных из формы
        success: function (response) {
          $(form)[0].reset(); //очистка формы
          modal.removeClass('modal--visible'); //закрытие модального окна
          document.location.href='thanks.html';
        },
        error: function (response) {
          console.error('Ошибка запроса ' + response);
        }
      });
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
    },
    //отправка формы
    submitHandler: function(form) {
      $.ajax({
        type: "POST", //метод
        url: "send.php", //куда отправляется форма
        data: $(form).serialize(), //передача данных из формы
        success: function (response) {
          $(form)[0].reset(); //очистка формы
          document.location.href='thanks.html';
        },
        error: function (response) {
          console.error('Ошибка запроса ' + response);
        }
      });
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
    },
    //отправка формы
    submitHandler: function(form) {
      $.ajax({
        type: "POST", //метод
        url: "send.php", //куда отправляется форма
        data: $(form).serialize(), //передача данных из формы
        success: function (response) {
          $(form)[0].reset(); //очистка формы
          document.location.href='thanks.html';
        },
        error: function (response) {
          console.error('Ошибка запроса ' + response);
        }
      });
    }
  });

  // маска для телефона

  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: ''});

  var player;
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: '8awdQRP816c',
      events: {
        'onReady': videoPlay,
      }
    });
  })

  function videoPlay(event) {
    event.target.playVideo();
  }

/*   //создание yandex карты
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [47.244729, 39.723187],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Офис Repair-Design',
            balloonContent: 'Вход со двора'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/location.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects
        .add(myPlacemark);
  }); */
});

//Оптимизация загрузки Яндекс.Карты на сайте — загрузка Яндекс.Карты при наведении
//Переменная для включения/отключения индикатора загрузки
var spinner = $('.ymap-container').children('.loader');
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;

  function init() {
    var myMap = new ymaps.Map('map', {
            center: [47.244729, 39.723187],
            zoom: 15         
        }, {
            searchControlProvider: 'yandex#search'
        }),        
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Офис Repair-Design',
            balloonContent: 'Вход со двора'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/location.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects
    .add(myPlacemark);
// Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
var layer = myMap.layers.get(0).get(0);
 
// Решение по callback-у для определения полной загрузки карты
waitForTilesLoad(layer).then(function() {
  // Скрываем индикатор загрузки после полной загрузки карты
  spinner.removeClass('is-active');
});
}

// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
function waitForTilesLoad(layer) {
return new ymaps.vow.Promise(function (resolve, reject) {
  var tc = getTileContainer(layer), readyAll = true;
  tc.tiles.each(function (tile, number) {
    if (!tile.isReady()) {
      readyAll = false;
    }
  });
  if (readyAll) {
    resolve();
  } else {
    tc.events.once("ready", function() {
      resolve();
    });
  }
});
}

function getTileContainer(layer) {
for (var k in layer) {
  if (layer.hasOwnProperty(k)) {
    if (
      layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
      || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
    ) {
      return layer[k];
    }
  }
}
return null;
}

// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback){
var script = document.createElement("script");

if (script.readyState){  // IE
  script.onreadystatechange = function(){
    if (script.readyState == "loaded" ||
            script.readyState == "complete"){
      script.onreadystatechange = null;
      callback();
    }
  };
} else {  // Другие браузеры
  script.onload = function(){
    callback();
  };
}

script.src = url;
document.getElementsByTagName("head")[0].appendChild(script);
}

// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
var ymap = function() {
$('.ymap-container').mouseenter(function(){
    if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем

    // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
      check_if_load = true; 

  // Показываем индикатор загрузки до тех пор, пока карта не загрузится
      spinner.addClass('is-active');

  // Загружаем API Яндекс.Карт
      loadScript("https://api-maps.yandex.ru/2.1/?apikey=3bae027f-df01-4386-8c89-d06f47467b08&lang=ru_RU", function(){
         // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
         ymaps.load(init);
      });                
    }
  }
);  
}

$(function() {

//Запускаем основную функцию
ymap();

});

//плавный переход по кнопке "Листайте вниз"
 $(document).ready(function(){
    $(".hero__scroll-down").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

//плавный переход по навигации
$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 2000);
  });
});
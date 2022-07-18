/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const prAdv = document.querySelectorAll('.promo__adv img'),
      prBg = document.querySelector('.promo__bg'),
      prGenre = prBg.querySelector('.promo__genre'),
      prList = document.querySelector('.promo__interactive-list');
//1)
//      prAdv.forEach(function (item) {
//        item.remove();
//     });  '   

prAdv.forEach(item => {
    item.remove();
});     

//2)
prGenre.textContent = 'драма';


//3)
prBg.style.backgroundImage = 'url(img/bg1.jpg)'; //  or ("img/bg.jp")
      
//4)

prList.innerHTML = "";

movieDB.movies.sort();
//+5)
movieDB.movies.forEach((film, i) => {
    prList.innerHTML += `
       <li class="promo__interactive-item">${i + 1} ${film}  
       </li>
    `;
});
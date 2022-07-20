/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: // checkbox
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


'use strict';

document.addEventListener('DOMContentLoaded', () => { // startet cod wie callback functiom
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
          prList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

addForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    
    let newFilm = addInput.value;
    const favorite = checkbox.checked;


    if (newFilm) {

        if (newFilm.length > 21) {
            newFilm = `${newFilm.substring(0, 22)}...`;
        }

        if (favorite) {

                console.log("Добавляем любимый фильм");
        }

        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);
    
        createMovieList(movieDB.movies, prList);
    }

    event.target.reset();

});

    const deleteprAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });  
    };


 
    
          
    const newLocal = () => {
        prGenre.textContent = 'драма';

        prBg.style.backgroundImage = 'url(img/bg1.jpg)';
    };
  const makeChanges = newLocal;

 

  const sortArr = (arr) => {
       arr.sort();
  };
   
 
    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);

        films.forEach((film, i) => {
        parent.innerHTML += `
           <li class="promo__interactive-item">${i + 1} ${film}  
           </li>
        `;
    });
    document.querySelectorAll('.delete').forEach((btn, i) => {
          btn.addEventListener('click', () => {
             btn.parentElement.remove();
             movieDB.movies.splice(i, 1);

             createMovieList(films, parent);
          });
    });
    }

    deleteprAdv(prAdv);
    makeChanges();
    createMovieList(movieDB.movies, prList);

});
















"use strict"
// Ereignisse mobile
//touchstart 
//touchmove
//touchend
//touchenter
//touchlesve
//touchcancel


window.addEventListener('DOMContentLoaded',() => {
      const box = document.querySelector('.box');

      box.addEventListener('touchstart', (e) => {
          e.preventDefault();

          console.log('Start');
          console.log(e.targetTouches)
      });

      box.addEventListener('touchmove', (e) => {
       e.preventDefault();

        console.log(e.targetTouches[0].pageX);
    });

    //box.addEventListener('touchend', (e) => {
    //    e.preventDefault();

    //    console.log('End');
  //  });


});



//touches   wie viel finger arbeitet

//targettouches wie viel finger verbindet mit element

//changedTouches
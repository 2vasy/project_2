

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');


//btn.onclick = function() {
 //     alert('Click');
//};


//btn.onclick = function() {
  //    alert(' Second Click'); kommt nur Second erste kommt nicht
//};


//btn.addEventListener('click', () => {
  //    alert('Click');
 //});
 


//btn.addEventListener('click', () => {
  //    alert(' Second Click');
// });
 
//btn.addEventListener('mouseenter', () => {
  //    console.log('Hover'); kommt Hover im console im brauser
   //});
    
   //btn.addEventListener('mouseenter', (e) => {
     // console.log(e.target);
      //e.target.remove();
      //console.log('Hover'); delete button
   //});

   //let i = 0; 
   const deleteElement = (e) => {
      //console.log(e.currentTarget);
      console.log(e.target);
      console.log(e.type);
      //i++;
      //if (i == 1)  {
        //    btn.removeEventListener('click', deleteElement);  
      //}
};


 //  btn.addEventListener('click', deleteElement);
 //  overlay.addEventListener('click', deleteElement);


 btns.forEach(btn => {
      btn.addEventListener('click', deleteElement, {once: true});
 });
      


const link = document.querySelector('a');

link.addEventListener('click', function(event) {
     event.preventDefault();  // kommt nicht bei link

     console.log(event.target);
});

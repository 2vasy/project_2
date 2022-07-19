//console.log(document.body);
//console.log(document.head);
//console.log(document.documentElement);
//console.log(document.body.childNodes); kommen alle elemente, die in body wohnen
//console.log(document.body.firstChild); kommt erste baby
//console.log(document.body.lastChild);// kommt lezte baby

//console.log(document.querySelector('#current').parentNode.parentNode);  // kommen die  Eltern

//console.log(document.querySelector('[data-current="3"]').nextSibling.nextSibling); // komnt element nach dem atribut
//console.log(document.querySelector('[data-current="3"]').previousSibling); //kommt der element der vorne steht 

//nach diesen befehlen kommen Node knoten.******************************************

/* -------------------------------------------------------------------------------*/
//console.log(document.querySelector('[data-current="3"]').previousElementSibling);


//console.log(document.querySelector('[data-current="3"]').nextElementSibling);

//console.log(document.querySelector('#current').parentNode.parentElement); 

//console.log(document.body.firstElementChild); //kommt erste baby
//console.log(document.body.lastElementChild);
 //nach diesen befehlen kommen die Elemente

for (let node of document.body.childNodes) {
if (node.nodeName == '#text') {
    continue;
}
    console.log(node);
}
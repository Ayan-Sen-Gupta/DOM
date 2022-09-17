//Examine the DOCUMENT object//

//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = '123';
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent='hello';
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);

//GET ELEMENT BY ID//
//console.log(document.getElementById('header-title'));
//let headerTitle = document.getElementById('header-title');
//console.log(headerTitle);
//let header = document.getElementById('main-header');
//console.log(header);
//console.log(document.getElementById(''))


//headerTitle.textContent='Hello';
//headerTitle.innerText='GoodBye';

//console.log(headerTitle.textContent);
//console.log(headerTitle.innerText);
//headerTitle.innerHTML='<h3>Hello</h3>'; //If you lok at the elements tab,it will put this below the <h1> tag inside the <head> element.
//headerTitle.style.borderBottom='solid 3px #000';
//header.style.borderBottom='solid 3px #000';

 //let head=document.querySelector('.title');
 //console.log(head);
 //head.style.color='#008000';
 //head.style.fontWeight='bold';


 //GET ELEMENT BY CLASS NAME

 let items = document.getElementsByClassName("list-group-item");
 console.log(items);
 console.log(items[1]);

 items[1].textContent='Hello 2';
 items[1].style.fontWeight='bold';
 items[1].style.backgroundColor='Yellow';

 //items.style.backgroundColor='#f4f4f4'; //It gives an error because items is an HTML collection or array. We need to loop through it
 for(let i=0;i<items.length;i++)
 {
    items[i].style.backgroundColor='#f4f4f4';
 }

 items[2].style.backgroundColor='green';

 for(i=0;i<items.length;i++)
 {
    items[i].style.fontWeight='bold';
    items[i].style.color='blue';
 }


//GET ELEMENT BY TAG NAME
 let li = document.getElementsByTagName("li");
 console.log(li);
 console.log(li[1]);

 li[1].textContent='Hello 2';
 li[1].style.fontWeight='bold';
 li[1].style.backgroundColor='Yellow';

 //li.style.backgroundColor='#f4f4f4'; //It gives an error because li is an HTML collection or array. We need to loop through it
 for(let i=0;i<li.length;i++)
 {
    li[i].style.backgroundColor='#f4f4f4';
 }

 li[2].style.backgroundColor='green';

 for(i=0;i<li.length;i++)
 {
    li[i].style.fontWeight='bold';
    li[i].style.color='blue';
 }


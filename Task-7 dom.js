//Task-3
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

 //Task-4
 //GET ELEMENT BY CLASS NAME

//  let items = document.getElementsByClassName("list-group-item");
//  console.log(items);
//  console.log(items[1]);

//  items[1].textContent='Hello 2';
//  items[1].style.fontWeight='bold';
//  items[1].style.backgroundColor='Yellow';

//  //items.style.backgroundColor='#f4f4f4'; //It gives an error because items is an HTML collection or array. We need to loop through it
//  for(let i=0;i<items.length;i++)
//  {
//     items[i].style.backgroundColor='#f4f4f4';
//  }

//  items[2].style.backgroundColor='green';

//  for(i=0;i<items.length;i++)
//  {
//     items[i].style.fontWeight='bold';
//     items[i].style.color='blue';
//  }


//Task-5
// //GET ELEMENT BY TAG NAME
//  let li = document.getElementsByTagName("li");
//  console.log(li);
//  console.log(li[1]);

//  li[1].textContent='Hello 2';
//  li[1].style.fontWeight='bold';
//  li[1].style.backgroundColor='Yellow';

//  //li.style.backgroundColor='#f4f4f4'; //It gives an error because li is an HTML collection or array. We need to loop through it
//  for(let i=0;i<li.length;i++)
//  {
//     li[i].style.backgroundColor='#f4f4f4';
//  }

//  li[2].style.backgroundColor='green';

//  for(i=0;i<li.length;i++)
//  {
//     li[i].style.fontWeight='bold';
//     li[i].style.color='blue';
//  }


//Task-6
//querySelector(single Element selector)

// let header = document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';

// let input = document.querySelector('input'); //There are 2 inputs but the query selector will take the first one by default
// input.value='Hello World';

// let submit = document.querySelector('input[type="submit"]');
// submit.value='Send';

// //let item = document.querySelector('.list-group-item'); //There are many items but the query selector will take the first one by default 
// //item.style.color='red';

// let lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';

// let secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color='green';

// //let thirdItem=document.querySelector('.list-group-item:nth-child(3)');
// //thirdItem.style.display='none';

// //querySelectorALL(Multiple Element selector)
// let titles=document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='Hello';

// secondItem=document.querySelectorAll('li:nth-child(2)');

// let odd=document.querySelectorAll('li:nth-child(odd)');

// for(let i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor='green';
//     secondItem[i].style.color='green';
//     //even[i].style.color='pink';
// }


//Task-7
//Traversing the DOM

// let itemList=document.querySelector('#items');
//ParentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//Parent Element
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement);

//childNodes
//console.log(itemList.childNodes); //This gives a node list along with the index.It shows the value called text in the list, which represents the line breaks. Therefore this command is not useful to us.
//Chlildren
// console.log(itemList.children); //This gives HTML collection with no value called text. It doesnt take into consideration the line breaks. Therefore, it is useful.
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';

//firstChild
//console.log(itemList.firstChild); //It shows the value called text, which represents the line breaks. Therefore this command is not useful to us.
//firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello 1';

//lastChild
//console.log(itemList.lastChild);//It shows the value called text, which represents the line breaks. Therefore this command is not useful to us.
//lastELementChild
///console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Hello 4';

//nextSibling
//console.log(itemList.nextSibling);//It shows the value called text, which represents the line breaks. Therefore this command is not useful to us.
//nextElementSibling
//console.log(itemList.nextElementSibling);//It shows null because there is no next element of the same level. 

//previousSibling
//console.log(itemList.previousSibling);//It shows the value called text, which represents the line breaks. Therefore this command is not useful to us.
//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green';

//createElement
//create a div
let newDiv=document.createElement('div');
//Add Class
newDiv.className='list-group-item';
//Add id
newDiv.id='hello1';
//Add attribute
newDiv.setAttribute('title','Hello Div');

//Create text node
let newDivText=document.createTextNode('Hello World');
//Add text to div
newDiv.appendChild(newDivText); //Till here the new element created is just in the JS, we have to insert it in the DOM
// console.log(newDiv);

let container = document.querySelector('header .container');
let h1=document.querySelector('header h1');
 container.insertBefore(newDiv,h1);
 
//  newDiv.style.fontSize='30px';

//  let listGroup=document.querySelector('div .list-group-item');
//  let item1=document.querySelector('div li');
//  listGroup.insertBefore(newDiv,item1);

 

  let parentNode=document.getElementById('items');
parentNode.innerHTML='<li>Hello World</li>'+parentNode.innerHTML;

 

















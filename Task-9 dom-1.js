//Task- 8 & 9
//Adding values to the item list after submitting
let form=document.getElementById('addForm');
let itemList=document.getElementById('items');


//Form Submit Event
form.addEventListener('submit',addItems);
//Remove Item event
itemList.addEventListener('click',removeItems);


function addItems(e){
    e.preventDefault();
    //Get input value
    let newItem=document.getElementById('item').value;
    let description=document.getElementById('description').value;
   //creating new li element
     let li=document.createElement('li');
   //Adding class to the li
     li.className='list-group-item';
//Adding Text Node to the input value
    li.appendChild(document.createTextNode(newItem));
   // li.appendChild(document.createTextNode(description));
   li.appendChild(document.createTextNode(' '+'-'+' '+description));
    
//create delete button
let deleteBtn= document.createElement('button');
//Add class to the delete button
deleteBtn.className='btn btn-danger btn-sm float-right delete';
//Add textNode to the delete button
deleteBtn.appendChild(document.createTextNode('X'));
//Adding delete button to li
li.appendChild(deleteBtn);

//Creating edit button
let editBtn=document.createElement('button');
//Assigning class to the edit button
editBtn.className='btn btn-danger btn-sm float-right';
//Adding textNode to edit button
editBtn.appendChild(document.createTextNode('Edit'));
//Adding the editBtn to the <li> element
li.appendChild(editBtn);

//Adding the li to the ul
    itemList.appendChild(li);

}


function removeItems(e){
    if(e.target.classList.contains('delete')){ //For ensuring that the item gets deleted only when we click on 'X' and not otherwise
        if(confirm('Are you sure?')){//If we click on 'ok' in the pop-up
            let li = e.target.parentElement;//assigning the parent element(li) of the target(X) to the variable li.
            itemList.removeChild(li); //Removing <li>[say item2 and 'X'] from <ul>(itemList) 

        }

    }
}



let filter=document.getElementById('filter');
//Filter event
filter.addEventListener('keyup',filterItems);

function filterItems(e){
  //Convert text to lowercase
  let text=e.target.value.toLowerCase(); //Converting the searched text to lowercase
  //Get all li element
  let items = document.getElementsByTagName('li'); //Gives HTML collection, have to convert to array form
  //converting items to array
  Array.from(items).forEach(function(element){
    let itemName=element.firstChild.textContent;
    let desc=element.childNodes[1].textContent;
    if(itemName.toLowerCase().indexOf(text)!=-1 || desc.toLowerCase().indexOf(text)!=-1){ //If the value we are searching matches with the itemlist
        element.style.display='block';
    }
    else{
        element.style.display='none';
    }
})

}
    
  
  







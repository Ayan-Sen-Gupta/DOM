// //Working with Local Storage
// localStorage.setItem('name','Bob'); //Setting item as key value pairs
// console.log(localStorage.getItem('name'));  //getting item by key. It will give the corresponding value
// localStorage.removeItem('name');

// //Working with Session Storage
// sessionStorage.setItem('name','John');
// console.log(sessionStorage.getItem('name'));
// localStorage.removeItem('name');
// //Update the name
// sessionStorage.setItem('name','Carl');   //It will override the previous value

// //Working with Cookies
// document.cookie='firstName=Kyle; expires' + new Date(9999,0,20).toUTCString();
// document.cookie='lastName=Smith; expires' + new Date(9999,0,20).toUTCString();
// //View the cookies
// console.log(document.cookie);




const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.mssg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
  // console.log(nameInput.value);

  if(nameInput.value==''||emailInput.value=='')
  {
   // alert("Please fill all the fields"); //alert function is not recommended
   msg.classList.add('error');
   msg.innerHTML='Please fill all the fields';
   setTimeout(()=>msg.remove(),3000);
  }
  else
  {
    // alert("Success");
    //console.log('success');
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));

    userList.appendChild(li);

    localStorage.setItem('name',nameInput.value);
    localStorage.setItem('email',emailInput.value);
  
  }

  //Clear fields
  nameInput.value='';
  emailInput.value='';
}
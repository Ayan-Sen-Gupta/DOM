//Task-10
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


// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.mssg');
// const userList = document.querySelector('#users');

// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//     e.preventDefault();
//   // console.log(nameInput.value);

//   if(nameInput.value==''||emailInput.value=='')
//   {
//    // alert("Please fill all the fields"); //alert function is not recommended
//    msg.classList.add('error');
//    msg.innerHTML='Please fill all the fields';
//    setTimeout(()=>msg.remove(),3000);
//   }
//   else
//   {
//     // alert("Success");
//     //console.log('success');
//     const li=document.createElement('li');
//     li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));

//     userList.appendChild(li);

//     localStorage.setItem('name',nameInput.value);
//     localStorage.setItem('email',emailInput.value);
  
//   }

//   //Clear fields
//   nameInput.value='';
//   emailInput.value='';
// }



//Task-11
// //Working with Objects
// let myObj={
//     Name:'Dominic',
//     Age: 56
// };
// // localStorage.setItem('myObj',myObj); //If we pass the object as it is, it will not show the correct value. We need to convert it to string
// //Converting the object to string
// let myObj_serialised=JSON.stringify(myObj); 
// localStorage.setItem('myObj',myObj_serialised);
// console.log(localStorage);
// //Getting the object in its original form
// let myObj_deserialised=JSON.parse(localStorage.getItem('myObj')); 
// console.log(myObj_deserialised); 




// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.mssg');
// const userList = document.querySelector('#users');

// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//     e.preventDefault();
//   // console.log(nameInput.value);

//   if(nameInput.value==''||emailInput.value=='')
//   {
//    // alert("Please fill all the fields"); //alert function is not recommended
//    msg.classList.add('error');
//    msg.innerHTML='Please fill all the fields';
//    setTimeout(()=>msg.remove(),3000);
//   }
//   else
//   {
//     // alert("Success");
//     //console.log('success');
//     const li=document.createElement('li');
//     li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));

//     userList.appendChild(li);

//     let myObj={
//       Name:nameInput.value,
//       email:emailInput.value
//     };
    
//     let myObj_serialised=JSON.stringify(myObj);
//     localStorage.setItem('User_Details',myObj_serialised);
  
//   }

//   //Clear fields
//   nameInput.value='';
//   emailInput.value='';
// }



//Task-12

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

    let myObj={
      name:nameInput.value,
      email:emailInput.value
    };
    
    let myObj_serialised=JSON.stringify(myObj);
    localStorage.setItem(myObj.email, myObj_serialised);
    
    // console.log(Object.keys(myObj));
    //Iterating through objects
    let myKeys=Object.keys(localStorage); //Local storage is also an object
    myKeys.forEach((key) =>{
      let stringifiedValue=localStorage.getItem(key);
      let detailsOfPeople=JSON.parse(stringifiedValue);
      console.log(detailsOfPeople);

       // console.log(JSON.parse(stringifiedValue));

       // console.log(myObj[key]);
    });

      //Showing the list of users below the form
    // //Approach-1
    // const li=document.createElement('li');
    // li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));
    // userList.appendChild(li);

    //Approach-2
    let parentNode=document.getElementById('users');
    let childHTML=`<li>${myObj.name} - ${myObj.email}</li>`;
    parentNode.innerHTML=parentNode.innerHTML+childHTML;
      
  }

  //Clear fields
  nameInput.value='';
  emailInput.value='';
}



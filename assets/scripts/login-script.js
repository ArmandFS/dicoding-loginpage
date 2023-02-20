

const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
     //making an input email variable
     const email = inputEmailElement.value;
     const password = inputPasswordElement.value;
     
     //make an if statement if expected email is identical, then call goToHome() function
     //if not, call showPopUp()
     if (email == expectedEmail && password == expectedPassword){
      goToHome();
     } else{
      showPopUp();
     }
});


const modalElement = document.querySelector('#modal');

// function to show a pop up whenever any action
function showPopUp() {
  modalElement.classList.add('display');

  // hiding the popup and display after 3 seconds
  setTimeout(function() {
    modalElement.classList.remove('display')
  }, 3000)
}

// function to go to home
function goToHome() {
  location.href = './home.html';
}

// function to go to login
function goToLogin() {
  location.href = './index.html';
}

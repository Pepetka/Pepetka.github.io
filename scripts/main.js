var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/web.png') {
        myImage.setAttribute('src','images/html-css-js.png');
    }
    else {
        myImage.setAttribute('src','images/web.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('#приветствие');

function setUserName() {
    var myName = prompt('Enter your name.');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Привет, ' + myName + '. Добро пожаловать на страницу.';
}
if (!localStorage.getItem('name')) {
    setUserName();
}
else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Привет, ' + storedName + '. Добро пожаловать на страницу.';
}

myButton.onclick = function() {
    setUserName();
}
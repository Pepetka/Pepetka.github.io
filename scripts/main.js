var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/Firefox-logo.webp') {
        myImage.setAttribute('src','images/Firefox2.png');
    }
    else {
        myImage.setAttribute('src','images/Firefox-logo.webp');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Enter your name.');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Привет, ' + myName + '. Это тест страница.';
}
if (!localStorage.getItem('name')) {
    setUserName();
}
else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Привет, ' + storedName + '. Это тест страница.';
}

myButton.onclick = function() {
    setUserName();
}
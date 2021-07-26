let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/download.jpg') {
      myImage.setAttribute('src','images/chess-board.jpg');
    } else {
      myImage.setAttribute('src','images/download.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'chess is cool, ' + myName;
    }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'chess is cool, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
window.addEventListener('scroll', function () {
  const navigationBar = document.querySelector('.navigation');
  if (window.scrollY > 50) {
    navigationBar.classList.add('scrolled');
  } else {
    navigationBar.classList.remove('scrolled');
  }
});


function startDialog() {
  let userName = prompt("What's your name");
  if (userName !== null) {
    alert("Hi, " + userName + "!");
  }

  let isAdult = confirm("Are you 18?");
  if (isAdult) {
    alert("Congrats! You're an adult");
  } else {
    alert("You're not an adult :(");
  }

  let numberOfAttempts = 0;
  let correctAnswer = "2";

  while (numberOfAttempts < 3) {
    let userAnswer = prompt("Guess the number from 1-10 and get a discount");
    if (userAnswer === correctAnswer) {
      alert("Correct! Your answer is " + userAnswer);
      break;
    } else {
      alert("Not correct :(");
      numberOfAttempts++;
    }
  }

  displayDeveloperInfo("Martyshenko", "Iryna", "Frontend Developer");
}

function displayDeveloperInfo(lastName, firstName, position = "Frontend Developer") {
  alert("Developer: " + firstName + " " + lastName + "\Position: " + position);
}


function compareStrings(str1, str2) {
  if (str1.length > str2.length) {
    alert("Longer string: " + str1);
  } else if (str1.length < str2.length) {
    alert("Longer string: " + str2);
  } else {
    alert("Same strings");
  }
}


compareStrings("Hi", "Hello");

startDialog();


document.getElementById("change-bg-btn").addEventListener("click", () => {

  document.body.style.backgroundImage = "linear-gradient(rgba(255, 0, 0, 0.3), rgba(255, 0, 0, 0.4)), url('images/main-background.jpg')";
  setTimeout(() => {
    document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('images/main-background.jpg')";
  }, 30000);
});


document.getElementById("redirect-btn").addEventListener("click", () => {
  location.href = "https://www.tripadvisor.com";
});

document.getElementById("change-text-btn").addEventListener("click", () => {
  document.getElementById("heading").innerHTML = "New Heading Text";
});


document.getElementById("change-items-text-btn").addEventListener("click", () => {
  let items = document.querySelectorAll(".item");
  items.forEach(item => {
    item.textContent = "New element text";
  });
});


document.getElementById("create-element-btn").addEventListener("click", () => {

  let newDiv = document.createElement("div");

  let newText = document.createTextNode("New Element Created");
  newDiv.appendChild(newText);

  let parentElement = document.getElementById("parent");
  parentElement.insertAdjacentElement("afterend", newDiv);
});

document.getElementById("remove-element-btn").addEventListener("click", () => {
  let elementToRemove = document.getElementById("remove-element");
  elementToRemove.remove();
});
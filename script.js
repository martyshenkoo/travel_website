window.addEventListener('scroll', function () {
  const navigationBar = document.querySelector('.navigation');
  if (window.scrollY > 50) {
    navigationBar.classList.add('scrolled');
  } else {
    navigationBar.classList.remove('scrolled');
  }
});

// Функція "Діалог з користувачем"
function startDialog() {
  let userName = prompt("Як тебе звати?");
  if (userName !== null) {
    alert("Привіт, " + userName + "!");
  }

  let isAdult = confirm("Тобі є 18 років?");
  if (isAdult) {
    alert("Вітаємо! Ви дорослий.");
  } else {
    alert("Вибачте, вам менше 18 років.");
  }

  let numberOfAttempts = 0;
  let correctAnswer = "42";

  // Цикл для спроби вгадати правильну відповідь
  while (numberOfAttempts < 3) {
    let userAnswer = prompt("Яка відповідь на основне питання життя, всесвіту і всього такого?");
    if (userAnswer === correctAnswer) {
      alert("Правильно! Ваша відповідь — " + userAnswer);
      break;
    } else {
      alert("Неправильно, спробуйте ще раз.");
      numberOfAttempts++;
    }
  }

  // Виклик функції виведення інформації про розробника
  displayDeveloperInfo("Іванов", "Іван", "Frontend Developer");
}

// Функція для виведення інформації про розробника
function displayDeveloperInfo(lastName, firstName, position = "Frontend Developer") {
  alert("Розробник: " + firstName + " " + lastName + "\nПосада: " + position);
}

// Функція порівняння двох рядків
function compareStrings(str1, str2) {
  if (str1.length > str2.length) {
    alert("Більший рядок: " + str1);
  } else if (str1.length < str2.length) {
    alert("Більший рядок: " + str2);
  } else {
    alert("Обидва рядки рівні за довжиною.");
  }
}

// // Приклад використання функції порівняння рядків
// compareStrings("Привіт", "Здрастуйте");

// startDialog();

document.getElementById("change-bg-btn").addEventListener("click", () => {

  document.body.style.backgroundImage = "linear-gradient(rgba(255, 0, 0, 0.3), rgba(255, 0, 0, 0.4)), url('images/main-background.jpg')";
  setTimeout(() => {
    document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('images/main-background.jpg')";
  }, 30000);
});

// Перенаправити на іншу сторінку
document.getElementById("redirect-btn").addEventListener("click", () => {
  location.href = "https://www.tripadvisor.com";
});

// Змінити текст заголовка
document.getElementById("change-text-btn").addEventListener("click", () => {
  document.getElementById("heading").innerHTML = "Новий текст заголовка";
});


document.getElementById("change-items-text-btn").addEventListener("click", () => {
  let items = document.querySelectorAll(".item");
  items.forEach(item => {
    item.textContent = "Новий текст для кожного елементу";
  });
});


document.getElementById("create-element-btn").addEventListener("click", () => {

  let newDiv = document.createElement("div");


  let newText = document.createTextNode("Це новий елемент, доданий на сторінку!");
  newDiv.appendChild(newText);

  document.body.appendChild(newDiv);
});

document.getElementById("append-element-btn").addEventListener("click", () => {
  let parentElement = document.getElementById("parent");
  parentElement.append("Текст після усіх елементів");
});

document.getElementById("remove-element-btn").addEventListener("click", () => {
  let elementToRemove = document.getElementById("remove-element");
  elementToRemove.remove();
});
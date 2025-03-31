window.addEventListener('scroll', function () {
  const navigationBar = document.querySelector('.navigation');
  if (window.scrollY > 50) {
    navigationBar.classList.add('scrolled');
  } else {
    navigationBar.classList.remove('scrolled');
  }
});


function changeButtonColor() {
  document.querySelector('.explore-button').style.backgroundColor = 'red';
}

const button = document.querySelector('.explore-button');
button.onmouseout = function () {
  button.style.backgroundColor = '';
};


const logo = document.querySelector('.logo');

function changeText() {
  logo.textContent = 'TRAVEL WORLD';
}

function changeTextBack() {
  logo.textContent = 'TRAVEL';
}

logo.addEventListener('mouseover', changeText);
logo.addEventListener('mouseout', changeTextBack);


const formHandler = {
  handleEvent(event) {
    if (event.type === 'submit') {
      event.preventDefault();
      alert('Форма відправлена!');
    }
  }
};

document.querySelector('.cta-form').addEventListener('submit', formHandler);


document.getElementById('list').addEventListener('click', function (event) {
  if (event.target.tagName === 'LI') {
    document.querySelectorAll('#list li').forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');
  }
});

document.getElementById('menu').addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    let action = event.target.dataset.action;
    let list = document.getElementById('list');

    if (action === 'add') {
      let newItem = document.createElement('li');
      newItem.textContent = `Application number ${list.children.length + 1}`;
      list.appendChild(newItem);
    } else if (action === 'remove') {
      if (list.lastElementChild) list.removeChild(list.lastElementChild);
    } else if (action === 'clear') {
      list.innerHTML = '';
    }
  }
});

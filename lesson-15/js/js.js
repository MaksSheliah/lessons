let form = document.querySelector('form');
let inputList = document.querySelector('form-input_list').querySelectorAll('input')
let inputSpan = document.querySelector('form-input_list').querySelectorAll('span')

let checkInput = (event) => {
  let boolean = false;
  let j = 0;
  let error = '';
  for (let input of inputList) {
    if (input.getAttribute('type') === 'text') {
      if (input.value.trim() === '') {
        boolean = true;
        input.value = '';
        input.classList.add('error-input');
        input.placeholder = 'Ошибка ввода';
        inputSpan[j].classList.add('error-span');
        error += '\n-имя';
      } else {
        inputSpan[j].classList.remove('error-span');
        input.classList.remove('error-input');
        input.placeholder = 'Введите имя';
      }
    }
    if (input.getAttribute('type') === 'tel') {
      if (!/^\d+$/.test(input.value.trim())) {
        boolean = true;
        input.value = '';
        input.classList.add('error-input');
        input.placeholder = 'Ошибка ввода';
        inputSpan[j].classList.add('error-span');
        error += '\n-телефон';
      } else {
        inputSpan[j].classList.remove('error-span');
        input.classList.remove('error-input');
        input.placeholder = 'Введите телефон'
      }
    }
    if (input.getAttribute('type') === 'checkbox') {
      if (!input.checked) {
        boolean = true;
        inputSpan[j].classList.add('error-span');
        error += '\n-Ошибка';
      } else {
        inputSpan[j].classList.remove('error-span');
      }
    }
    j++  
  }

  if (boolean) {
    event.preventDefault();
    document.querySelector('#massage').innerText = 'найдена ошибка' +error;
    document.querySelector('.message-error').classList.add('active');
  }
}

let closeWindow = () => {
  document.querySelector('.message-error').classList.remove('active');
}

form.addEventListener('submit', checkInput);
document.querySelector('.message-error').addEventListener('click',closeWindow);
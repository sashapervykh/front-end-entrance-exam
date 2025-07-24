import 'normalize.css';
import '../css/style.css';
import '../css/photo-section.css';
import '../css/hello-section.css';
import '../css/language-section.css';
import '../css/experience-section.css';
import '../css/tools-section.css';
import '../css/education-section.css';
import '../css/interest-section.css';
import '../css/contacts-section.css';
import { downloadPDF } from './downloadPDF';
import { defineRipple } from './defineRipple';

const editable = document.querySelectorAll('[contenteditable="true"]');
const downloadButton = document.querySelector('.download');

if (localStorage.length !== 0) {
  for (let i = 0; i < localStorage.length; i++) {
    const id = localStorage.key(i);
    const savedData = localStorage.getItem(id);
    const elem = document.getElementById(id);
    if (!elem) continue;
    if (savedData === '') {
      elem.classList.add('hidden');
      continue;
    }
    if (id.indexOf('hashtags' !== -1)) {
      elem.replaceChildren();
      elem.textContent = savedData;
    }
    elem.textContent = savedData;
  }
}

editable.forEach((elem) => {
  elem.addEventListener('focus', (event) => {
    event.target.classList.remove('saving');
    event.target.classList.add('focus');
  });

  elem.addEventListener('blur', (event) => {
    event.target.classList.remove('focus');
    event.target.classList.add('saving');
  });

  elem.addEventListener('input', (event) => {
    const changedElement = event.target;
    const changedElementID = changedElement.id;
    localStorage.setItem(changedElementID, changedElement.textContent);
  });
});

downloadButton.addEventListener('click', downloadPDF);

window.addEventListener('click', (event) => {
  const section = event.target.closest('.block-wrapper');
  if (section) {
    console.log(section);
    defineRipple(event, section);
    section.classList.add('ripple');
    const timeout = setTimeout(() => {
      section.classList.remove('ripple');
      clearTimeout(timeout);
    }, 1000);
  }
});

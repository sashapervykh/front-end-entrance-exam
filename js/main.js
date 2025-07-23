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

const editable = document.querySelectorAll('[contenteditable="true"]');

if (localStorage.length !== 0) {
  console.log(1);
  for (let i = 0; i < localStorage.length; i++) {
    const id = localStorage.key(i);
    console.log(id);
    const savedData = localStorage.getItem(id);
    console.log(savedData);
    const elem = document.getElementById(id);
    console.log(elem);
    if (!elem) continue;
    if (savedData === '') {
      console.log('hiding');
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
  elem.addEventListener('input', (event) => {
    const changedElement = event.target;
    const changedElementID = changedElement.id;
    localStorage.setItem(changedElementID, changedElement.textContent);
  });
});

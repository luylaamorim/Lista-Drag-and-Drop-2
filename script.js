import { addItem } from "./modules/addRemove.js";

const btnEl = document.querySelector('#add-btn');
btnEl.addEventListener('click', () => {
  addItem();
});

'use strict';

//& Setting variables
let modal;
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//& Function to select proper modal window for manipulation
const selectModal = function (event) {
  const regex = /\d+/g;
  const buttonPressed = event.currentTarget.id;
  const modalNumber = String(buttonPressed.match(regex));

  const modal = document.querySelector(`#modal-${modalNumber}`);

  console.log(`Regex: ${regex}`);
  console.log(`Button Pressed: ${buttonPressed}`);
  console.log(`Modal Number: ${modalNumber}`);
  console.log(`Modal: ${modal}`);
  return modal;
};

//& Function to open appropriate modal window
const openModal = function (event) {
  modal = selectModal(event);
  // console.log(modal);
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//& Function to hide currently open modal window
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//& Listening for click event on any of the "Show" 3 buttons to call openModal()
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

//& Listening for click event on "X" or blurred background to call closeModal()
for (let j = 0; j < btnsCloseModal.length; j++) {
  btnsCloseModal[j].addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
}

//& Listening for Escape key press while modal any window is open
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    // console.log(modal);
    closeModal();
  }
});

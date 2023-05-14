const modal = document.querySelector('.footer-modal');
const modalContent = document.querySelector('.footer-modal-content');
const openModalBtn = document.querySelector('#our-team-button');
const closeModalBtn = document.querySelector('.footer-close-modal');
const scrollModal = document.querySelector('.footer-scroll')

function openModal() {
  modal.style.display = 'block';
  document.body.style.position = 'fixed'
  setTimeout(() => {
    modalContent.style.opacity = '1';
  }, 100);
}

function closeModal() {
  modalContent.style.opacity = '0';
  document.body.style.position = ''
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300);
}

function scrollToTop() {
  modalContent.scrollTop = 0;
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
scrollModal.addEventListener('click', scrollToTop);
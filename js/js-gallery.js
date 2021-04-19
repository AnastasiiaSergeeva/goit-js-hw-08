// Создание и рендер разметки по массиву данных и предоставленному шаблону.
// - Реализация делегирования на галерее `ul.js-gallery` и получение `url` большого
//   изображения.+
// - Открытие модального окна по клику на элементе галереи.+
// - Подмена значения атрибута `src` элемента `img.lightbox__image`.
// - Закрытие модального окна по клику на кнопку
//   `button[data-action="close-lightbox"]`.
// - Очистка значения атрибута `src` элемента `img.lightbox__image`. Это необходимо
//   для того, чтобы при следующем открытии модального окна, пока грузится
//   изображение, мы не видели предыдущее.
import galleryItems from './gallery-items.js';


const refs = {
  galleryEl: document.querySelector('.js-gallery'),
  lightboxEl: document.querySelector('.js-lightbox'),
  overlay: document.querySelector('.lightbox__overlay'),
  lightboxImg: document.querySelector('.lightbox__image'),
  lightboxCloseBtn: document.querySelector(
    'button[data-action="close-lightbox"]',
  ),
};
const createGallery = createGalleryMarkup(galleryItems);
refs.galleryEl.insertAdjacentHTML('afterbegin', createGallery);
refs.galleryEl.addEventListener('click', openModalClick);
refs.lightboxEl.addEventListener('click', closeModalBtn);
refs.overlay.addEventListener('click', closeModalBtn);
refs.lightboxCloseBtn.addEventListener('click', closeModalBtn);
window.addEventListener('keydown', closeBtnEsc);


function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
  <a class="gallery__link"
    href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    }).join(''); 
}


function openModalClick(evt) {
  evt.preventDefault();
  const target = evt.target;
  if (target.nodeName !== 'IMG') {
    return;
  }
  refs.lightboxEl.classList.add('is-open');
  refs.lightboxImg.src = target.dataset.source;
  refs.lightboxImg.alt = target.alt;
}

function closeModalBtn(evt) {

  refs.lightboxEl.classList.remove('is-open');
  refs.lightboxImg.attributes.src.value = '';
  refs.lightboxImg.attributes.alt.value = '';

  
}

function closeBtnEsc(evt) {
    if(evt.code === 'Escape'){
        closeModalBtn(evt);
    }
};







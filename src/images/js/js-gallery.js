// Создание и рендер разметки по массиву данных и предоставленному шаблону.
// - Реализация делегирования на галерее `ul.js-gallery` и получение `url` большого
//   изображения.
// - Открытие модального окна по клику на элементе галереи.
// - Подмена значения атрибута `src` элемента `img.lightbox__image`.
// - Закрытие модального окна по клику на кнопку
//   `button[data-action="close-lightbox"]`.
// - Очистка значения атрибута `src` элемента `img.lightbox__image`. Это необходимо
//   для того, чтобы при следующем открытии модального окна, пока грузится
//   изображение, мы не видели предыдущее.
import galleryItems from './gallery-items.js';

const galleryEl = document.querySelector(`#js-gallery`);
const 






const createGallery = ({ url, alt }) => {
  
  galleryEl.insertAdjacentHTML('beforeend',
    `<li><img src="${url}" alt="${alt}"  class="gallery-img"></li>  `);
}
const element = images.map(createGallery).join(" ");
console.log(createGallery);
console.log(galleryEl);
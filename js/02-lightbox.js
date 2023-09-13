import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector(".gallery");


function createElementMarkup(markup) {
    return markup.map(({ preview, original, description }) => {
        return ` <li class="gallery__item">
   <a class="gallery__link" href=${original}>
      <img class="gallery__image" src=${preview} alt=${description} />
   </a>
</li>`}).join("")
}
galleryContainer.insertAdjacentHTML("beforeend",createElementMarkup(galleryItems));

const lightbox = new SimpleLightbox('.gallery a',
    {
    captionsData: "alt",
    }
);

lightbox.on('show.simplelightbox'); 


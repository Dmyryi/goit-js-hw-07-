import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector(".gallery");


function createElementMarkup(markup) {
    return markup.map(({ preview, original, description }) => {
        return ` <li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`}).join("")
}
galleryContainer.insertAdjacentHTML("beforeend",createElementMarkup(galleryItems));
console.log(galleryItems);




const handleOpenModal = (event) => {
    event.preventDefault()
     if (event.target.nodeName !== "IMG") {
        return;
     }
    
     const linkOriginalPicture = event.target.dataset.source;
  
    const modal = basicLightbox.create(`
    <div class="modal">
        <img src="${linkOriginalPicture}" >
    </div>
    `,
         {
        onShow: () => { 
            document.addEventListener("keydown", handleCloseModalKeyEsc);
            },
        onClose: () => {
            document.removeEventListener("keydown", handleCloseModalKeyEsc) 
            }
        })
    modal.show();
       function handleCloseModalKeyEsc (event) {
            if (event.key === "Escape") {
                modal.close();
        }
    } 

}
galleryContainer.addEventListener('click', handleOpenModal)
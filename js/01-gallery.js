import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const itemMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemMarkup);
galleryContainer.addEventListener('click', onGalleryItemClick);

function createGalleryMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
           <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`;
    }).join('');    
};

function onGalleryItemClick(evt) {

    evt.preventDefault();
    const isItemImgEl = evt.target.classList.contains('gallery__image')
    if (!isItemImgEl) {
        return;
    };
      
    const instance = basicLightbox.create(`
        <img src="${evt.target.dataset.source}">
    `,
    {
      onShow: instance => {
        window.addEventListener('keydown', onEscKeyPress);
      },
      onClose: instance => {
        window.removeEventListener('keydown', onEscKeyPress);
      },
    },
    );
  instance.show()

    function onEscKeyPress(evt) {
        if (evt.code === 'Escape') {
            instance.close()
        }
        console.log(evt);
    }
}



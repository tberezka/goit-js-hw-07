import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");
const itemMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemMarkup);



function createGalleryMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
           <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                />
            </a>
        </div>`;
    }).join('');    
};

galleryContainer.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(evt) {

    evt.preventDefault();
    const isItemImgEl = evt.target.classList.contains('gallery__image')
    if (!isItemImgEl) {
        return;
    };
    
    var lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    }
    lightbox.on('show.simplelightbox' function () {

});
    );

    // window.addEventListener('keydown', onEscKeyPress)
    // function onEscKeyPress() {
    //     instance.close();
    // }
}

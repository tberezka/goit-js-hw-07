import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector(".gallery");
const itemMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemMarkup);

function createGalleryMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
           <a class="gallery__item" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                />
            </a>`;
    }).join('');    
};

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

lightbox.on(() => {
    lightbox.next();
});

console.log(galleryItems);
const modal = document.querySelector('#galleryModal');
const galleryImgGroup = document.querySelectorAll('.studioImgGroup > li');
const modalImg = document.querySelector('#galleryModal > .modal-content');
const closeBtn = document.querySelector('#galleryModal .close');

galleryImgGroup.forEach(img => img.addEventListener("click", (e) => {
  modal.style.display = "block";
  modalImg.src = img.children[0].src;

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";

    if (modal.style.display = 'none') {
      document.body.style.overflow = 'auto';
      document.removeEventListener('touchmove', e.preventDefault, false);
    }
  });

  if(modal.style.display = 'block') {
    document.body.style.overflow = 'hidden';
    document.addEventListener('touchmove', e.preventDefault, false);
  } 
  
}));

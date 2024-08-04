const modal = document.querySelector('#galleryModal');
const galleryImgGroup = document.querySelectorAll('.studioImgGroup > li');
const modalImg = document.querySelector('#galleryModal > .modal-content');
const closeBtn = document.querySelector('#galleryModal .close');

galleryImgGroup.forEach(img => img.addEventListener("click", () => {
  modal.style.display = "block";
  modalImg.src = img.children[0].src;

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";

    if (modal.style.display = 'none') {
      document.body.style.overflowY = 'auto';
      document.addEventListener('touchmove', preventDefault, true);
    }
  });

  if(modal.style.display = 'block') {
    document.body.style.overflowY = 'hidden';
    document.addEventListener('touchmove', preventDefault, false);
  } 
  
}));

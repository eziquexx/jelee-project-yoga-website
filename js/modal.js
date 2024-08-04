const modal = document.querySelector('#galleryModal');
const galleryImgGroup = document.querySelectorAll('.studioImgGroup > li');
const modalImg = document.querySelector('#galleryModal > .modal-content');
const closeBtn = document.querySelector('#galleryModal .close');

galleryImgGroup.forEach(img => img.addEventListener("click", () => {
  modal.style.display = "block";
  modalImg.src = img.children[0].src;

  modal.onmouseover = () => {
    document.body.style.overflowY = "hidden";
    document.addEventListener('touchmove', preventDefault, false);
  }
  modal.onmouseleave = () => {
    document.body.style.overflowY = "auto";
  }
}));


closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

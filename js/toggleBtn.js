const toggleBtn = document.querySelector('#toggleBtn');
const toggleMenuGroup = document.querySelector('.toggleMenuGroup');
let isVisible = true;

const toggleBtnImgOpen = "url('./img/toggleBtn1.png')";
const toggleBtnImgClose = "url('./img/toggleBtn2.png')";

toggleBtn.addEventListener('click', function() {
  isVisible = !isVisible;
  toggleMenuGroup.classList.toggle('active');
  // toggleBtn.textContent = isVisible ? '열기' : '닫기';
  toggleBtn.style.backgroundImage = isVisible ? toggleBtnImgOpen : toggleBtnImgClose;
});
const scheduleToggleBtn = document.querySelector('.scheduleViewToggle');
const scheduleToggleContents = document.querySelector('.scheduleTableWrap');
let scheduleToggleBtnTxt = true;
const test = document.querySelector('#scheduleToggleText');
const textChangeClose = `그룹 스케쥴 닫기<span>▲</span>`;
const textChangeOpen = `그룹 스케쥴 열기<span>▼</span>`;


scheduleToggleBtn.addEventListener('click', function() {
  scheduleToggleBtnTxt = !scheduleToggleBtnTxt;
  scheduleToggleContents.classList.toggle('active');
  test.innerHTML = scheduleToggleBtnTxt ? textChangeClose : textChangeOpen
});
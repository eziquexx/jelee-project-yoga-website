const $topBtn = document.getElementById('topBtn');

$topBtn.addEventListener('click', (e) => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

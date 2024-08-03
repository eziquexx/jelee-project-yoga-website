const $about = document.getElementById('about');
const $class_type = document.getElementById('classType');
const $schedule = document.getElementById('schedule');
const $studio_gallery = document.getElementById('studioGallery');
const $faqWrap = document.getElementById('faqWrap');
const $contact = document.getElementById('contact');

const main_menus = document.querySelectorAll('.menuGroup > li');
const toggle_menus = document.querySelectorAll('.toggleMenuGroup > li');
const sub_menus = document.querySelectorAll('.subMenuGroup > li');
const arrays = [$about, $class_type, $schedule, $studio_gallery, $faqWrap, $contact];

main_menus.forEach((mainM, index) => mainM.addEventListener('click', (e) => {
  e.preventDefault();
  const sectionTop = arrays[index].offsetTop;

  window.scrollTo({
    top: sectionTop - 70,
    behavior: "smooth",
  })
}))

toggle_menus.forEach((toggleM, index) => toggleM.addEventListener('click', (e) => {
  e.preventDefault();

  const sectionTop = arrays[index].offsetTop;

  window.scrollTo({
    top: sectionTop - 70,
    behavior: "smooth",
  });
}))

sub_menus.forEach((subM, index) => subM.addEventListener('click', (e) => {
  e.preventDefault();
  const sectionTop = arrays[index].offsetTop;

  window.scrollTo({
    top: sectionTop - 70,
    behavior: "smooth",
  });
}))






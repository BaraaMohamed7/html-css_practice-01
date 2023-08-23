let navIcon = document.getElementById('navIcon');
let navList = document.getElementById('navList');

navIcon.onclick = function () {
  navList.classList.toggle('active')
  console.log('hi')
}
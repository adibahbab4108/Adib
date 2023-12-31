let tabLinks = document.getElementsByClassName('tab-links');
let tabContents = document.getElementsByClassName('tab-contents');
function openTab(tabname) {
    for (let tablink of tabLinks) {
        tablink.classList.remove('active-link');//remove active link bar
    }
    for (let tabContent of tabContents) {
        tabContent.classList.remove('active-tab')//remove active tab content
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}
// Navbar scroll begaviours...
const navbar = document.getElementById("nav");
let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos < currentScrollPos) {
    navbar.style.top = "0"; // hide the navbar when scrolling up
  } else {
    navbar.style.top = "-100px"; // show the navbar when scrolling down
  }
  prevScrollPos = currentScrollPos;
});

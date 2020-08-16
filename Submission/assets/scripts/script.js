const navMenu = document.querySelectorAll(".button");
for (let button of navMenu) {
   button.addEventListener('click', function(event) {

      alert('Maaf, Website Masih dalam Pengembangan')
   });
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
   var currentScrollPos = window.pageYOffset;
   if (prevScrollpos > currentScrollPos) {
      document.querySelector("nav").style.top = "0";
   } else {
      document.querySelector("nav").style.top = "-80px";
   }
   prevScrollpos = currentScrollPos;
}

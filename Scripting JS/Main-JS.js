document.addEventListener('DOMContentLoaded', function() {
  let fadeUps = document.querySelectorAll('.fade-up');
  
  function checkFadeUp() {
    fadeUps.forEach(function(fadeUp) {
      let position = fadeUp.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;
      
      if (position < windowHeight * 0.9) {
        fadeUp.classList.add('active');
      }
    });
  }
  
  checkFadeUp();
  
  window.addEventListener('scroll', function() {
    checkFadeUp();
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.getElementById('animatedText');
  const textContent = textElement.textContent;
  
  function typeWriter(text, index) {
      if (index <= text.length) {
          textElement.innerHTML = text.slice(0, index) + '<span class="cursor">|</span>';
          setTimeout(() => typeWriter(text, index + 1), 150); // Speed of typing
      } 
  }

  function resetTyping(text) {
      textElement.innerHTML = '';
      typeWriter(text, 0);
  }

  // Start typing animation on page load
  resetTyping(textContent);
});
window.onscroll = function() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.remove("navbar-transparent");
    navbar.classList.add("navbar-light-bg");
  } else {
    navbar.classList.remove("navbar-light-bg");
    navbar.classList.add("navbar-transparent");
  }
};
// PRELOADER

        var loader = document.getElementById("preloader");
        window.addEventListener("load", function() {
            loader.style.display = "none";
        });


// ROLAGEM SUAVE

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Verifica se o link pertence ao carrossel
        if (!this.closest('.carousel')) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// EFEITO DIGITANDO
    function runTypingEffect() {
        const text = "Sou Geovanna Bastos.";
        const typingElement = document.getElementById("typing-text");
        const typingDelay = 100;
      
        typeText(text, typingElement, typingDelay);
      }
      
      function typeText(text, typingElement, delay) {
        for (let i = 0; i < text.length; i++) {
          setTimeout(() => {
            typingElement.textContent += text.charAt(i);
          }, delay * i);
        }
      }
      
      document.addEventListener("DOMContentLoaded", runTypingEffect);

// CAROUSEL 2
       
      $(document).ready(function(){
        $(".carousel-dois").owlCarousel({
            margin: 10,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: false
                }
            }
        });
    });

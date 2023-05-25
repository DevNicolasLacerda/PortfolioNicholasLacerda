// Funcao para voltar ao topo da pagina

const voltar_topo_btn = document.querySelector("#voltar_topo_btn");

window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
            voltar_topo_btn.classList.add("active");
            voltar_topo_btn.addEventListener("click", function () {
                  //$("html, body").animate({ scrollTop: 0 }, "slow");
                  window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                  });
            });
      } else {
            voltar_topo_btn.classList.remove("active");
      }
});

// Funcao para abrir e fechar o menu

const btnMobile = document.getElementById('hamburger');
let menuMobile = document.querySelector(".mobile-menu");

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();

    if (menuMobile.classList.contains("open")) {
      menuMobile.classList.remove("open");
    } else {
      menuMobile.classList.add("open");
    }

    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded' , active);

    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir menu')
    }
}

btnMobile.addEventListener('click' , toggleMenu);
btnMobile.addEventListener('touchstart' , toggleMenu);







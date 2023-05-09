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

function menuShow() {
      let menuMobile = document.querySelector(".mobile-menu");
      if (menuMobile.classList.contains("open")) {
            menuMobile.classList.remove("open");
            document.querySelector(".icon").src = "assets/menu_white_36dp.svg";
      } else {
            menuMobile.classList.add("open");
            document.querySelector(".icon").src = "assets/close_white_36dp.svg";
      }
}

// Funcao dark and light mode


// Texto automatico

/*
const text = document.querySelector(".auto-type");

const textLoad = () => {
setTimeout(() => {
text.textContent = "Nicholas Lacerda";
}, 0);
setTimeout(() => {
text.textContent = "Front-end";
}, 4000);
setTimeout(() => {
text.textContent = "Developer";
}, 8000); //1s = 1000 milliseconds
}
textLoad();
setInterval(textLoad, 12000);

/*

const switcher = document.querySelector(".btn_dark");

switcher.addEventListener("click", function () {
      document.body.classList.toggle("light-theme");
      document.body.classList.toggle("dark-theme");

      const className = document.body.className;
      if (className == "light-theme") {
            this.textContent = "Dark";
      } else {
            this.textContent = "Light";
      }
});

*/

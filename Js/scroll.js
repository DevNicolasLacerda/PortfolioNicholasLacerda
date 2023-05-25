const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entradas) => {
        if (entradas.isIntersecting) {
            entradas.target.classList.add('show');
        } else {
            entradas.target.classList.remove('show');
        }
    });
});

const elementosEscondidos = document.querySelectorAll('.hidden');
elementosEscondidos.forEach((el) => observador.observe(el));



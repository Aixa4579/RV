const intro = document.getElementById("Intro");
const logo = document.getElementById("LogoIntro");
const contenido = document.getElementById("Contenido");
const body = document.body;

logo.addEventListener("click", () => {

    intro.classList.add("oculto");

    contenido.classList.remove("Oculto");
    contenido.classList.add("Mostrar");

    body.classList.add("activo");

    body.classList.remove("no-scroll");

    setTimeout(() => {
        intro.style.display = "none";
    }, 500);

});
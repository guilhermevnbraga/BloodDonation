const perfil = document.getElementById("perfil");
const login = document.getElementById("login");
const register = document.getElementById("register");
const headerPerfil = document.getElementsByClassName("header-perfil")[0];
const perfilNav = document.getElementsByClassName("perfil-nav")[0];

if (localStorage.getItem("logado") === 'true') {
    login.style.display = "none";
    register.style.display = "none";
    headerPerfil.style.display = "flex";
    console.log("a");
} else {
    login.style.display = "flex";
    register.style.display = "flex";
    headerPerfil.style.display = "none";
    console.log("b");
}

perfil.addEventListener("click", (e) => {
    e.preventDefault();

    window.location.href = "pages/userData.html";
});

login.addEventListener("click", (e) => {
    e.preventDefault();

    window.location.href = "pages/login.html";
});

register.addEventListener("click", (e) => {
    e.preventDefault();

    window.location.href = "pages/register.html";
});

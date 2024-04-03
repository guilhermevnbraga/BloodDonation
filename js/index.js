const perfil = document.getElementById("perfil");

perfil.addEventListener("click", (e) => {
    if (localStorage.getItem("logado")) {
        if (perfil.href !== "pages/userData.html") {
            perfil.href = "pages/userData.html";
            window.location.href = "pages/userData.html";
        }
    } else if (perfil.href !== "pages/register.html") {
        perfil.href = "pages/register.html";
        window.location.href = "pages/register.html";
    }
});

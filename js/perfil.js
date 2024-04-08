document.addEventListener("DOMContentLoaded", function() {
    const perfil = document.getElementById("perfil");
    const login = document.getElementById("login");
    const register = document.getElementById("register");
    const headerPerfil = document.getElementsByClassName("header-perfil")[0];
    const perfilNav = document.getElementsByClassName("perfil-nav")[0];

    const logged = () => {
        for(let c = 0; c < localStorage.length; c++) {
            let data = JSON.parse(localStorage.getItem('user' + c))
            if(data && data.logged === true) {
                return data
            }
        }
    
        return false
    }
    

    if (logged()) {
        login.style.display = "none";
        register.style.display = "none";
        headerPerfil.style.display = "flex";
    } else {
        login.style.display = "flex";
        register.style.display = "flex";
        headerPerfil.style.display = "none";
    }

    perfil.addEventListener("click", (e) => {
        e.preventDefault();

        window.location.href = "/BloodDonation/pages/userData.html";
    });

    login.addEventListener("click", (e) => {
        e.preventDefault();

        window.location.href = "/BloodDonation/pages/login.html";
    });

    register.addEventListener("click", (e) => {
        e.preventDefault();

        window.location.href = "/BloodDonation/pages/register.html";
    });
});

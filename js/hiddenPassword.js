const password = document.getElementById("password");
const eye = document.getElementById("eye");
let trigger = false;

eye.addEventListener("click", (event) => {
    event.preventDefault();

    if (trigger === true) {
        eye.style.background = "url(../img/eye-closed.png)";
        eye.style.backgroundSize = '1.2vw 1.6vh'
        eye.style.width = '1.2vw'
        eye.style.height = '1.6vh'
        password.type = 'password'
        trigger = false;
    } else {
        eye.style.background = "url(../img/eye.png)";
        eye.style.backgroundSize = '1.3vw 2.1vh'
        eye.style.width = '1.3vw'
        eye.style.height = '2.1vh'
        password.type = 'text'
        trigger = true;
    }
});
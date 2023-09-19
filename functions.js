console.log("page loaded...");

function message() {
    alert("Ninja was liked!");
}
function entrar(element) {
    if(element.innerText == "Entrar") {
        element.innerText = "Salir";
    } else {
        element.innerText = "Entrar";
    }
}

function hide(el) {
    el.remove();
}
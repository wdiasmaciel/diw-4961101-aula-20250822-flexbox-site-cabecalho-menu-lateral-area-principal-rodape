let noticiasCarregadas = false;

function lerNoticias() {
    const container = document.getElementById("container");

    if (!noticiasCarregadas) {
        carregarNoticias();
        noticiasCarregadas = true;
    } else {
        container.innerHTML = "";
        noticiasCarregadas = false;
    }
}

function carregarNoticias() {
    const container = document.getElementById("container");
    container.innerHTML = "Olá";
}
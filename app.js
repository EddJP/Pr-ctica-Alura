let amigos = [];

document.addEventListener("DOMContentLoaded", () => {
    const inputNombre = document.getElementById("amigo");
    const botonAgregar = document.querySelector(".button-add");
    const listaAmigos = document.getElementById("listaAmigos");
    
    botonAgregar.addEventListener("click", agregarAmigo);
    
    function agregarAmigo() {
        let nombre = inputNombre.value.trim();
        
        if (nombre === "") {
            alert("Por favor, inserte un nombre.");
            return;
        }
        
        amigos.push(nombre);
        inputNombre.value = "";
        actualizarLista();
        console.log(amigos);
    }
    
    function actualizarLista() {
        listaAmigos.innerHTML = "";
        amigos.forEach(amigo => {
            let li = document.createElement("li");
            li.textContent = amigo;
            listaAmigos.appendChild(li);
        });
    }
});
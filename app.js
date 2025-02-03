let amigos = [];

document.addEventListener("DOMContentLoaded", () => {
    const inputNombre = document.getElementById("amigo");
    const botonAgregar = document.querySelector(".button-add");
    const listaAmigos = document.getElementById("listaAmigos");
    const botonSortear = document.querySelector(".button-draw");
    const botonReiniciar = document.querySelector(".button-reset");
    const resultado = document.getElementById("resultado");
    
    botonAgregar.addEventListener("click", agregarAmigo);
    botonSortear.addEventListener("click", sortearAmigo);
    botonReiniciar.addEventListener("click", reiniciarLista);
    
    function agregarAmigo() {
        let nombre = inputNombre.value.trim();
        
        if (nombre === "") {
            alert("Por favor, inserte un nombre.");
            return;
        }
        
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
            alert("Solo se aceptan letras.");
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
    
    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("No hay amigos para sortear.");
            return;
        }
        
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        
        resultado.innerHTML = `<p>El amigo sorteado es: <strong>${amigoSorteado}</strong></p>`;
    }
    
    function reiniciarLista() {
        amigos = [];
        listaAmigos.innerHTML = "";
        resultado.innerHTML = "";
        console.log("Lista de amigos reiniciada.");
    }
});



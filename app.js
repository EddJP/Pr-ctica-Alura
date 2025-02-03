let amigos = []
document.addEventListener("DOMContentLoaded", () => {
   //Caputurar el valor del campo de entrada
    const inputNombre = document.getElementById("nombre");
    const botonAgregar = document.getElementById("agregar");

    botonAgregar.addEventListener("click"), ()  => {
        //Capturar el valor del campo de entrada
        let nombre = inputNombre.ariaValueMax.trim(); 
         // Validar la entrada
         if (nombre === "") {
            alert("Por favor, inserte un nombre.");
            return;
         // Actualizar el array de amigos
         amigos.push(nombre);
        
         // Limpiar el campo de entrada
         inputNombre.value = "";
         
         console.log(amigos);
     });
 });
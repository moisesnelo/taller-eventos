const saludoDiv = document.getElementById("divBoton");
const botonSaludar = document.getElementById("boton")

botonSaludar.addEventListener("click", function(event) {
    event.stopPropagation();
        alert("Hola!");
    
})


saludoDiv.addEventListener("click", function (event) {
        alert("Hola! soy el div");
    
});
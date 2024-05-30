const formulario = $("formulario");
const mensaje = $("mensaje");

formulario.onsubmit = (e) => {
    mensaje.style.color = "red";
    if (formulario["nombre"].value === "") {
        mensaje.textContent = "Nombre vacío";      
    } else if (formulario["nombre"].value.length > 50) {
        mensaje.textContent = "El nombre no puede ser mayor a 50 caracteres";
    } else if (formulario["apellido"].value === "") {
        mensaje.textContent = "Apellido vacío";
    } else if (formulario["apellido"].value.length > 50) {
        mensaje.textContent = "El apellido no puede ser mayor a 50 caracteres";
    } else if (formulario["edad"].value === "") {
        mensaje.textContent = "Edad vacía";
    } else if (formulario["edad"].value < 0) {
        mensaje.textContent = "La edad no puede ser negativa";
    } else if (formulario["edad"].value < 18) {
        mensaje.textContent = "No puede ser menor de edad";
    } else if (formulario["altura"].value === "") {
        mensaje.textContent = "Altura vacía";
    } else if (formulario["altura"].value < 0) {
        mensaje.textContent = "La altura no puede ser negativa";
    } else if (formulario["altura"].value > 230) {
        mensaje.textContent = "La altura no puede ser mayor a 230 cm";
    } else if (formulario["correo"].value === "") {
        mensaje.textContent = "Correo vacío";
    } else {
        mensaje.textContent = "Todos los datos son correctos";
        mensaje.style.color = "green";
    }
    
    e.preventDefault();
};

function $(elemento) {
    return document.getElementById(elemento)
}
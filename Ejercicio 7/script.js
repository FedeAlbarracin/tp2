const listado = $("listado");
const mostrar = $("mostrar");
const tareas = $("tareas");

let ejecutado = false;

async function listadoPersonas () {
if (!ejecutado) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const personas = await response.json();
    personas.forEach(persona => {
        const item = document.createElement("li");
        item.textContent = `${persona.id} - ${persona.name} - ${persona.username} - ${persona.email} - ${persona.website}`;
        const verTareas = document.createElement("button");
            verTareas.textContent = "Ver tareas";
            verTareas.onclick = async () => {
                tareas.innerHTML = ""
                const responseTareas = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${persona.id}`);
                const listadoTareas = await responseTareas.json();
                listadoTareas.forEach(tarea => {
                    const item = document.createElement("li");
                    item.textContent = `ID tarea ${tarea.id} ${tarea.title}`
                    if (!tarea.completed) {
                        item.style.backgroundColor = "red";
                        item.style.color = "white"
                    } 
                tareas.appendChild(item)
                })
            };
        item.appendChild(verTareas);
        listado.appendChild(item);
    });
    ejecutado = true;}
}


listadoPersonas()




function $(elemento) {
    return document.getElementById(elemento)
}
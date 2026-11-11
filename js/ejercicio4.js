let estudiantes = [
    "Juan",
    "María",
    "Carlos",
    "Ana",
    "Luis",
    "Sofía",
    "Pedro",
    "Valentina",
    "Camila"
];

let formulario = document.getElementById("formulario");
let busqueda = document.getElementById("busqueda");
let mensaje = document.getElementById("mensaje");
let listaEstudiantes = document.getElementById("listaEstudiantes");

// Mostrar todos los estudiantes en la lista
for (let i = 0; i < estudiantes.length; i++) {
    let item = document.createElement("li");
    item.textContent = estudiantes[i];
    listaEstudiantes.appendChild(item);
}

formulario.addEventListener("submit", buscarEstudiante);

function buscarEstudiante(event) {
    event.preventDefault();

    busqueda.style.backgroundColor = "";
    let texto = busqueda.value.trim();

    // Validar que el campo no esté vacío
    if (texto === "") {
        mensaje.textContent = "Escribe el nombre que quieres buscar";
        mensaje.className = "error";
        busqueda.style.backgroundColor = "red";
        return;
    }

    // Buscar sin importar mayúsculas o minúsculas
    let encontrado = estudiantes.find(function (nombre) {
        return nombre.toLowerCase().includes(texto.toLowerCase());
    });

    if (encontrado) {
        mensaje.textContent = `El estudiante ${encontrado} está registrado`;
        mensaje.className = "exito";
    } else {
        mensaje.textContent = `El estudiante "${texto}" no se encuentra registrado`;
        mensaje.className = "error";
    }
}
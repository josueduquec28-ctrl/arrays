let listaProductos = [];

let formulario = document.getElementById("formulario");
let producto = document.getElementById("producto");
let precio = document.getElementById("precio");
let cantidad = document.getElementById("cantidad");
let tabla = document.getElementById("tabla");
let total = document.getElementById("total");

formulario.addEventListener("submit", agregarProducto);

function agregarProducto(event) {
    event.preventDefault();

    let productoAgregado = producto.value.trim();
    let precioAgregado = parseFloat(precio.value);
    let cantidadAgregada = parseInt(cantidad.value);

    // VALIDAR CAMPOS
    if (productoAgregado === "") {
        alert("INGRESE UN PRODUCTO");
        producto.style.backgroundColor = "red";
    } else if (isNaN(precioAgregado) || precioAgregado <= 0) {
        alert("INGRESE UN PRECIO VÁLIDO");
        precio.style.backgroundColor = "red";
    } else if (isNaN(cantidadAgregada) || cantidadAgregada <= 0) {
        alert("INGRESE UNA CANTIDAD VÁLIDA");
        cantidad.style.backgroundColor = "red";
    } else {
        listaProductos.push({
            nombre: productoAgregado,
            precio: precioAgregado,
            cantidad: cantidadAgregada
        });

        mostrar();
        formulario.reset();

        // Volver los campos a su color original
        producto.style.backgroundColor = "";
        precio.style.backgroundColor = "";
        cantidad.style.backgroundColor = "";
    }
}

function mostrar() {
    let totalNuevo = 0;
    tabla.innerHTML = "";

    for (let i = 0; i < listaProductos.length; i++) {
        let subtotal = listaProductos[i].precio * listaProductos[i].cantidad;
        totalNuevo += subtotal;

        tabla.innerHTML += `<tr>
            <td>${listaProductos[i].nombre}</td>
            <td>${listaProductos[i].precio}</td>
            <td>${listaProductos[i].cantidad}</td>
            <td>${subtotal}</td>
        </tr>`;
    }

    total.innerText = `Total: ${totalNuevo}`;
}
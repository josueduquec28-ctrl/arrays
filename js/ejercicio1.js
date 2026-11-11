let listaNombres=[]


let inputNombre=document.getElementById("nombre");
let boton = document.getElementById("btnAgregar");
let lista=document.getElementById("lista");
let cantidad=document.getElementById("cantidad");

boton.addEventListener("click", agregarNombre);
function agregarNombre(){
    event.preventDefault();
    let nombre=inputNombre.value.toUpperCase().trim();

    if (nombre===""){
        alert("INGRESE UN NOMBRE");
        inputNombre.style.backgroundColor="red";
    }else if(listaNombres.includes(nombre)){
        alert(`El nombre ${nombre} ya esta en la lista`);
        inputNombre.value="";
    }else{
        inputNombre.style.backgroundColor="white";
        listaNombres.push(nombre);
        inputNombre.value="";
    }

    mostrarNombre();
}

function mostrarNombre(){
    lista.innerText="";
    for (let i =0; i<listaNombres.length; i++){
        lista.innerHTML+=`<li>${listaNombres[i]}</li>`
    }
    cantidad.innerText=`Total registrados: ${listaNombres.length}`;
}

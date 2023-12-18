// app.js

// Datos de ejemplo para pruebas
let data = [
    { nombre: "Juan", apellido: "Doe", correo: "juan.doe@example.com", telefono: "123456789", edad: 30 },
    { nombre: "Jane", apellido: "Doe", correo: "jane.doe@example.com", telefono: "987654321", edad: 25 }
];

let indiceEdicion = null; // Variable para almacenar el índice del elemento que se está editando

// Función para agregar o editar datos en la tabla
function AgregarDatos() {
    let nombre = document.getElementById("InputName").value;
    let apellido = document.getElementById("InputLastName").value;
    let correo = document.getElementById("InputEmail").value;
    let telefono = document.getElementById("InputPhone").value;
    let edad = document.getElementById("InputAge").value;

    if (indiceEdicion !== null) {
        // Editar un elemento existente
        data[indiceEdicion] = { nombre, apellido, correo, telefono, edad };
        indiceEdicion = null;
    } else {
        // Agregar un nuevo elemento
        data.push({ nombre, apellido, correo, telefono, edad });
    }

    // Llamar a una función para actualizar la tabla
    ActualizarTabla();

    // Limpiar los campos de entrada
    document.getElementById("InputName").value = "";
    document.getElementById("InputLastName").value = "";
    document.getElementById("InputEmail").value = "";
    document.getElementById("InputPhone").value = "";
    document.getElementById("InputAge").value = "";
}

// Función para actualizar la tabla con los datos actuales
function ActualizarTabla() {
    let cuerpoTabla = document.querySelector("#TableData tbody");
    cuerpoTabla.innerHTML = "";

    data.forEach((item, index) => {
        let fila = cuerpoTabla.insertRow();

        let celda1 = fila.insertCell(0);
        celda1.textContent = item.nombre;

        let celda2 = fila.insertCell(1);
        celda2.textContent = item.apellido;

        let celda3 = fila.insertCell(2);
        celda3.textContent = item.correo;

        let celda4 = fila.insertCell(3);
        celda4.textContent = item.telefono;

        let celda5 = fila.insertCell(4);
        celda5.textContent = item.edad;

        let celda6 = fila.insertCell(5);
        celda6.innerHTML = `<button class="btn btn-danger" onclick="EliminarFila(${index})">Eliminar</button>`;

        let celda7 = fila.insertCell(6);
        celda7.innerHTML = `<button class="btn btn-warning" onclick="EditarFila(${index})">Editar</button>`;
    });
}

// Función para eliminar una fila de la tabla
function EliminarFila(indice) {
    data.splice(indice, 1);
    ActualizarTabla();
}

// Función para editar una fila en la tabla
function EditarFila(indice) {
    let item = data[indice];
    
    // Poblar el formulario con los datos seleccionados
    document.getElementById("InputName").value = item.nombre;
    document.getElementById("InputLastName").value = item.apellido;
    document.getElementById("InputEmail").value = item.correo;
    document.getElementById("InputPhone").value = item.telefono;
    document.getElementById("InputAge").value = item.edad;

    // Establecer el índice de edición al índice actual
    indiceEdicion = indice;
}

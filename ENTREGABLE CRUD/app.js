//Validar antes de agregar información
function ValidateForm() {
    let Nombres = document.getElementById("InputName").value;
    let Apellidos = document.getElementById("InputLastName").value;
    let Email = document.getElementById("InputEmail").value;
    let Phone = document.getElementById("InputPhone").value;
    let Edad = document.getElementById("InputAge").value;

    if (Nombres == "") {
        alert("El campo Nombres es requerido.");
        return false;
    }

    if (Apellidos == "") {
        alert("El campo Apellidos es requerido.");
        return false;
    }

    if (Email == "") {
        alert("El campo Correo Electrónico es requerido.");
        return false;
    }
    else if (!Email.includes("@")) {
        alert("Email inválido.");
        return false;
    }

    if (Phone == "") {
        alert("El campo Teléfono es requerido.");
        return false;
    }

    if (Edad == "") {
        alert("El campo Edad es requerido.");
        return false;
    }
    else if (Edad < 1) {
        alert("La edad no debe ser igual o menor a cero.");
    }

    return true;
}

//Leer
function ReadData() {
    let ListPeople;
    if (localStorage.getItem('ListPeople') == null) {
        ListPeople = [];
    }
    else {
        ListPeople = JSON.parse(localStorage.getItem('ListPeople'));
    }

    var html = "";
    ListPeople.array.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.Nombres + "</td>";
        html += "<td>" + element.Apellidos + "</td>";
        html += "<td>" + element.Email + "</td>";
        html += "<td>" + element.Phone + "</td>";
        html += "<td>" + element.Edad + "</td>";
        html += '<td><button onclick="deleteData(' + index + ')" class="btn btn-danger">Eliminar Dato</button><button(' + index + ')" class="btn btn-warning">Editar Dato</button>';
        html += "</tr>";
    });

    document.querySelector('#TableData').innerHTML = html;
}

document.onload = ReadData();

function AddData() {
    if (ValidateForm() == true) {
        let Nombres = document.getElementById("InputName").value;
        let Apellidos = document.getElementById("InputLastName").value;
        let Email = document.getElementById("InputEmail").value;
        let Phone = document.getElementById("InputPhone").value;
        let Edad = document.getElementById("InputAge").value;

        var ListPeople;

        if (localStorage.getItem('ListPeople') == null) {
            ListPeople = [];
        }
        else {
            ListPeople = JSON.parse(localStorage.getItem('ListPeople'));
        }
        ListPeople.push({
            Nombres: Nombres,
            Apellidos: Apellidos,
            Email: Email,
            Phone: Phone,
            Edad: Edad
        });

        localStorage.setItem('ListPeople', JSON.stringify(ListPeople));

        ReadData();

        document.getElementById('InputName').value = "";
        document.getElementById('InputLastName').value = "";
        document.getElementById('InputEmail').value = "";
        document.getElementById('InputPhone').value = "";
        document.getElementById('InputAge').value = "";
    }
}
/*eslint-disable*/
import "@babel/polyfill";
import { crearDoctor, login, logout, crearPaciente } from "./iniciarSesion";

let suscrito = false;

const formInicio = document.querySelector(".form--login");
const formRegistro = document.querySelector(".form--registro");
const cerrarBoton = document.querySelector(".logout");
const formPaciente = document.querySelector(".form--paciente");
const chart = document.querySelector("#chart");

const btnLogico = document.querySelector("#btnG");
const canvas = document.getElementById("chart");
// const ctx = canvas.getContext("2d");

// cliente.onConnectionLost = conexionPerdida;
// cliente.onMessageArrived = mensajeRecibido;
// function conexionPerdida(responseObject) {
//   if (responseObject.errorCode !== 0) {
//     console.log("Conexión perdida:", responseObject.errorMessage);
//   }
// }
// function mensajeRecibido(message) {
//   console.log("Mensaje recibido:", message.payloadString);

//   // Obtener los datos del mensaje y graficar el ECG
//   const ecgData = JSON.parse(message.payloadString);
//   //actualizarChart(ecgData);
// }

// const ecgChart = new Chart(ctx, {
//   type: "line",
//   data: {
//     labels: [],
//     datasets: [
//       {
//         label: "ECG",
//         data: [],
//         fill: false,
//         borderColor: "rgb(75, 192, 192)",
//         tension: 0.1,
//       },
//     ],
//   },
//   options: {
//     scales: {
//       x: {
//         display: true,
//         title: {
//           display: true,
//           text: "Tiempo",
//         },
//       },
//       y: {
//         display: true,
//         title: {
//           display: true,
//           text: "Amplitud",
//         },
//       },
//     },
//   },
// });
if (formInicio) {
  document.querySelector(".form--login"),
    addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      login(email, password);
    });
}
if (cerrarBoton) {
  console.log("cerrar");
  cerrarBoton.addEventListener("click", logout);
}

if (chart) {
  btnLogico.addEventListener("click", () => {
    const id = document.getElementById("idP").innerHTML;
    console.log(id);
    console.log(suscrito);
    if (!suscrito) {
      suscrito = true;

      btnLogico.textContent = "Detener Suscripcion";
    } else {
      suscrito = false;
      btnLogico.textContent = "Suscribirse";
    }
  });
}

if (formPaciente) {
  console.log("hola paciente");
  document
    .getElementById("openPopupBtn")
    .addEventListener("click", function () {
      document.getElementById("popup").style.display = "block";
    });

  document
    .getElementById("closePopupBtn")
    .addEventListener("click", function () {
      document.getElementById("popup").style.display = "none";
    });

  formPaciente.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombreP").value;
    const telefono = document.getElementById("telP").value;
    const edad = document.getElementById("edadP").value;
    const email = document.getElementById("correoP").value;
    const sexo = document.getElementById("sexoP").value;
    crearPaciente(nombre, email, edad, sexo, telefono);
  });
}

if (formRegistro) {
  console.log("Hola");
  formRegistro.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const cedula = document.getElementById("cedula").value;
    const numeroTrabajo = document.getElementById("NT").value;
    const telefono = document.getElementById("telefono").value;
    const nombreClinica = document.getElementById("NC").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;
    const confirmarContrasena = document.getElementById("contrasenaC").value;
    crearDoctor(
      nombre,
      cedula,
      numeroTrabajo,
      telefono,
      nombreClinica,
      correo,
      contrasena,
      confirmarContrasena
    );
  });
}

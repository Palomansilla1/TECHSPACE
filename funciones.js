function login(){
    let usuario=localStorage.getItem("usuario");
    let contraseña=localStorage.getItem("contraseña");
    let usuarioinput=document.getElementById("user").value;
    let contrainput=document.getElementById("contra").value;
    if (usuario==usuarioinput && contraseña==contrainput){
        alert("Login correcto")
        location.href="perfil.html"
    }
    if (usuario!=usuarioinput && contraseña!=contrainput){
        alert("Login incorrecto")
    }
}

function registrarse(){
    let usuario=document.getElementById("usuario").value;
    let contraseña=document.getElementById("contraseña").value;
    let email=document.getElementById("email").value;
    let telefono=document.getElementById("telefono").value;
    localStorage.setItem("usuario",usuario)
    localStorage.setItem("contraseña",contraseña)
    localStorage.setItem("email",email)
    localStorage.setItem("telefono",telefono)
    let imagenInput = document.querySelector('input[type="file"]');
    let imagen = imagenInput.files[0];
}
function telefono(){
    const telefono = localStorage.getItem("telefono"); // Recupera
    document.getElementById("tel").innerText = "telefono" + telefono;
}


function cargarPerfil() {
    document.getElementById("nombre-usuario").innerText = localStorage.getItem("usuario");
    document.getElementById("usuario-usuario").innerText = localStorage.getItem("usuario");
    document.getElementById("telefono-usuario").innerText = localStorage.getItem("telefono");
    document.getElementById("email-usuario").innerText = localStorage.getItem("email");
}
function registrarse() {
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let imagenInput = document.querySelector('input[type="file"]');
    let imagen = imagenInput.files[0];

    // Leer la imagen como base64
    let reader = new FileReader();
    reader.onload = function () {
        let imagenBase64 = reader.result;
        // Guardar todo en localStorage
        localStorage.setItem("usuario", usuario);
        localStorage.setItem("contraseña", contraseña);
        localStorage.setItem("email", email);
        localStorage.setItem("telefono", telefono);
        localStorage.setItem("imagen", imagenBase64); // guardar imagen base64
        alert("Registro completo");
    };
    if (imagen) {
        alert("login correcto")
        location.href="perfil.html"
               reader.readAsDataURL(imagen); // convertir a base64
    } else {
        alert("Por favor, subí una imagen");
    }
}
function cargarPerfil() {
    document.getElementById("nombre-usuario").innerText = localStorage.getItem("usuario");
    document.getElementById("usuario-usuario").innerText = localStorage.getItem("usuario");
    document.getElementById("telefono-usuario").innerText = localStorage.getItem("telefono");
    document.getElementById("email-usuario").innerText = localStorage.getItem("email");

    let imagen = localStorage.getItem("imagen");
    if (imagen) {
        document.getElementById("imagen-usuario").src = imagen;
    }
}

let esVisible=false
function mostrarOcultar(){
    const menu = document.getElementById("menu-nav");
    if (esVisible==false) {;
      menu.style.display="block";
      esVisible=true;
    } else {
      menu.style.display="none";  
      esVisible=false;
    }
}
function vender(){
    location.href="vender.html"
}
function entas() {
  const nombreProducto = document.getElementById("np").value;
  const infoProducto = document.getElementById("infop").value;
  const archivo = document.getElementById("fotop").files[0];

  if (archivo) {
    const lector = new FileReader();
    lector.onload = function (e) {
      const imagenBase64 = e.target.result;

      // Guardar datos en localStorage
      localStorage.setItem("productoNombre", nombreProducto);
      localStorage.setItem("productoInfo", infoProducto);
      localStorage.setItem("productoImagen", imagenBase64);
    };
    lector.readAsDataURL(archivo); // convierte la imagen a base64
  } else {
    // Si no se eligió imagen, guardar los otros datos
    localStorage.setItem("productoNombre", nombreProducto);
    localStorage.setItem("productoInfo", infoProducto);
    localStorage.removeItem("productoImagen"); // eliminar imagen si no hay
    window.location.href="perfil.html"

  }
}



  document.addEventListener("DOMContentLoaded", function() {
    const nombre = localStorage.getItem("productoNombre");
    const info = localStorage.getItem("productoInfo");
  });

  document.addEventListener("DOMContentLoaded", function() {
    const nombre = localStorage.getItem("productoNombre");
    const info = localStorage.getItem("productoInfo");
    const imagen = localStorage.getItem("productoImagen");


    if (imagen) {
      document.getElementById("imagen-producto").src = imagen;
    }
  });
document.addEventListener("DOMContentLoaded", function() {
    // Elementos del DOM
    let initialRegistrationForm = document.getElementById("initialRegistrationForm");
    let signInForm = document.getElementById("signInForm");
    let registerButton = document.getElementById("registerButton");
    let signInButton = document.getElementById("signInButton");
    let signUpLink = document.getElementById("signUpLink");
    let signInLink = document.getElementById("signInLink");
    let formTitle = document.getElementById("title"); // Elemento para el título del formulario

    // Función para manejar el registro inicial
    registerButton.addEventListener("click", function() {
        let username = initialRegistrationForm.username.value;
        let email = initialRegistrationForm.email.value;
        let password = initialRegistrationForm.password.value;

        // Aquí deberías implementar la lógica para guardar los datos de registro
        // y luego mostrar el formulario de inicio de sesión
        alert(`Datos registrados:\nUsuario: ${username}\nCorreo electrónico: ${email}\nContraseña: ${password}`);
        initialRegistrationForm.reset(); // Limpiar el formulario
        showSignInForm(); // Mostrar formulario de inicio de sesión

        formTitle.textContent = "Inicio de sesión"; // Cambiar título a "Inicio de sesión"
    });

    // Función para manejar el inicio de sesión
    signInButton.addEventListener("click", function() {
        let signInUsername = signInForm.signInUsername.value;
        let signInPassword = signInForm.signInPassword.value;

        // Lista de usuarios permitidos para inicio de sesión
        let allowedUsernames = ["Jenn", "Ale"]; // Agrega más nombres de usuario según sea necesario
        let allowedPasswords = ["1234", "123"]; // Agrega más contraseñas según sea necesario

        // Verificar si las credenciales son válidas
        let userIndex = allowedUsernames.indexOf(signInUsername);
        if (userIndex !== -1 && signInPassword === allowedPasswords[userIndex]) {
            // Autenticación exitosa, redirigir a la página principal
            alert("Inicio de sesión exitoso!");
            signInForm.reset(); // Limpiar el formulario de inicio de sesión

            // Redirigir al usuario a la página principal
            window.location.href = "principal.html";
        } else {
            // Autenticación fallida
            alert("Nombre de usuario o contraseña incorrectos.");
        }
    });

    // Función para mostrar el formulario de inicio de sesión y cambiar título a "Inicio de sesión"
    function showSignInForm() {
        initialRegistrationForm.style.display = "none"; // Ocultar formulario de registro inicial
        signInForm.style.display = "block"; // Mostrar formulario de inicio de sesión
        formTitle.textContent = "Inicio de sesión"; // Cambiar título a "Inicio de sesión"
    }

    // Evento para mostrar formulario de registro inicial al hacer clic en "Regístrate aquí"
    signUpLink.addEventListener("click", function(event) {
        event.preventDefault();
        initialRegistrationForm.style.display = "block"; // Mostrar formulario de registro inicial
        signInForm.style.display = "none"; // Ocultar formulario de inicio de sesión
        formTitle.textContent = "Ingrese sus datos"; // Cambiar título a "Ingrese sus datos"
    });

    // Evento para mostrar formulario de inicio de sesión al hacer clic en "Inicia sesión aquí"
    signInLink.addEventListener("click", function(event) {
        event.preventDefault();
        initialRegistrationForm.style.display = "none"; // Ocultar formulario de registro inicial
        signInForm.style.display = "block"; // Mostrar formulario de inicio de sesión
        formTitle.textContent = "Inicio de sesión"; // Cambiar título a "Inicio de sesión"
    });

  /*El elemento id "carrito" almacena en la variable "carrito" */
const carrito = document.getElementById('carrito');
/* El elemento id "lista-1" guarda la variable "elementos1" */
const elementos1 = document.getElementById('lista-1');
/* El elemento id "lista-2" guarda la variable "elementos2" */
const elementos2 = document.getElementById('lista-2');
/*Esta variable selecciona el elemento que tiene la id"#lista-carrito especificando el tbody"*/
const lista = document.querySelector('#lista-carrito tbody');
/*El elemento id "vaciar-carrito" lo guarda en la variable "vaciarCarritoBtn"*/
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

/*Este codigo se asegura de que los eventos esten listos para responder
 las interacciones del usuario cuando la pagina se carge*/
cargarEventListeners();

/*Este es la funcion de "cargarEventListeners" agrupando la 
configuracion de los eventos*/
function cargarEventListeners(){
    /*Cuando le den "click" al "elemento1 y 2" llamara a la "comprar elemento"*/
    elementos1.addEventListener('click', comprarElemento);
    elementos2.addEventListener('click', comprarElemento);
    /*Cuando le den "click" al elemento "carrito" se ejecutara la funcion "eliminarElemento"*/
    carrito.addEventListener('click', eliminarElemento);
    /*Cuando le den "click" al elemento "vaciarCarritoBtn" se activara la funcion "vaciarCarrito"*/
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}
/*La funcion "comprarElemento" tomara el parametro "e" el cual 
representara el evento que llama a la funcion*/
function comprarElemento(e){
    /*Llamara al metodo "prevenDefault" en el evento "e"*/
    e.preventDefault();
    /*Aqui se verifica si el elemento del evento "e.target" 
    tiene la clase CSS "agregar-carrito" (ayuda a identificar que el elemento
    que fue clickeado es el que desea procesar)*/
    if(e.target.classList.contains('agregar-carrito')){
        /*Si el elemento clickeado contiene la clase "agregar-carrito", 
        se obtiene el ancestro del padre del elemento clikeado*/
        const elemento = e.target.parentElement.parentElement;
        /*Se encarga de leer y procesar los datos del elemento seleccionado "nombre,precio,precio"
        para agregarlo al carrito de compras*/
        leerDatosElemento(elemento);
    }
}

/*La funcion "leerDatosElemento" toma el parametro "elemento"*/
function leerDatosElemento(elemento){
    /*Almacenara la informacion relevante para el elemento cmo "image,titulo,precio,id"*/
    const infoElemento = {
        image: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }

    /*Llama a la funcion "insertarCarrito" y pasa al objeto "inforElemento" como argumento*/
    insertarCarrito(infoElemento);
}

/*La funcion "insertarCarrito toma el parametro "elemento" que contiene la informacion
para agregar un producto al carrito*/
function insertarCarrito(elemento){
    /*Se crea un nuevo elemento "tr" utilizando "document.createElement"*/
    const row = document.createElement('tr');
    /*Se define el contenido HTML de la fila (<tr>) que se va agregar al carrito*/
    row.innerHTML =  `
        <td>
                <img src="${elemento.image}" width=100>        
        </td>

        <td>
            ${elemento.titulo}
        </td>

        <td>
            ${elemento.precio}
        </td>

        <td>
            <a herf="#" class="borrar" data-id="${elemento.id}">X</a>
        </td>
    `;

    
    /*Se agrega la fila "row" como hijo del elemento "lista"*/
    lista.appendChild(row);
}

/*La funcion "eliminarElemento" toma el parametro "e" que representara el evento*/
function eliminarElemento(e){
    /*El metodo "preventDefault" en el evento "e". Asegura que el enlace
    (<a>) con la clase "borrar"*/
    e.preventDefault();
    /*Las variables "elemento" y "elementoId" almacenan temporalmente
    el elemento que se va elimnar y su identificador (ID)*/
    let elemento,
        elementoId;
        /*Verifica si el elemento "e.target" tiene la clase CSS "borrar"*/
    if(e.target.classList.contains('borrar')){
        /*Si se cumple la condicion anterior, se eliminara el elemento padre 
        del documento clickeado "e.target"*/
        e.target.parentElement.parentElement.remove();
        /*Despues de eliminar la fila del carrito, se asigna el elemento
        (la fila eliminada) a la variable "elemento"*/
        elemento = e.target.parentElement.parentElement;
        /*Se obtiene el atributo "data-id" del enlace del "elemento" eliminado*/
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
}
/*La funcion "vaciarCarrito" toma el parametro "e" el cual representa el evento*/
function vaciarCarrito(e){
    /*El metodo "preventDefault" llama en el evento "e"*/
    e.preventDefault();
    /*Inicia un bucle "while" que ejecutara siempre que "lista.firtsChild" sea verdadero*/
    while(lista.firstChild){
        /*Se utilizara para eliminar el primer hijo "firstChild" del elemento "lista"*/
        lista.removeChild(lista.firstChild)
    }
   
}

});

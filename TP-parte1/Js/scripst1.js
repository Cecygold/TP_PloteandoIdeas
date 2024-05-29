// Script para el FORM de contacto 
document.addEventListener("DOMContentLoaded", function() {
    let modal = document.getElementById("contact-modal");
    let btn = document.getElementById("contact-link");
    let span = document.getElementsByClassName("close")[0];
    let form = document.getElementById("contact-form");

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        // Regular expressions
        let namePattern = /^[A-Za-z\s]{1,}$/;
        let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

        // Validate name
        if (!namePattern.test(name)) {
            alert("El nombre debe contener solo letras y espacios.");
            return;
        }

        // Validate email
        if (!emailPattern.test(email)) {
            alert("Introduce una dirección de correo electrónico válida.");
            return;
        }

        // Validate message
        if (message.trim() === "") {
            alert("El mensaje no puede estar vacío.");
            return;
        }

        // If all validations pass, submit the form
        alert("Formulario enviado correctamente.");
        form.submit();
    });
});

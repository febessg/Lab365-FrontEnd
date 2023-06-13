function fazerLogin(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log("E-mail:", email);
    console.log("Senha:", password);
} 


const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', fazerLogin);
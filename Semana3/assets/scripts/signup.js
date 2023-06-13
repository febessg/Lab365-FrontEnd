function processarCadastro(event) {
    event.preventDefault();
    let company = document.getElementById("company").value;
    let cnpj = document.getElementById("cnpj").value;
    let manager = document.getElementById("manager").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    console.log("Empresa:", company);
    console.log("CNPJ:", cnpj);
    console.log("Responsável:", manager);
    console.log("E-mail:", email);
    console.log("Telefone:", phoneNumber);
    console.log("Senha:", password);
    console.log("Confirmar senha:", confirmPassword);
} 


const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', processarCadastro);
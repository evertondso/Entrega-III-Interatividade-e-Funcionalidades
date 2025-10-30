
export function validarEmail(email) {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
}
export function validarCPF(cpf) {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return regex.test(cpf);
}
export function validarTelefone(telefone) {
    const regex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    return regex.test(telefone);
}

export function setupFormValidation() {
    
    const cpfInput = document.querySelector('#cpf');
    const telefoneInput = document.querySelector('#telefone');
    const form = document.querySelector("#cadastroForm");

    if (cpfInput) {
        cpfInput.removeEventListener('input', aplicarMascaraCPF); 
        cpfInput.addEventListener('input', aplicarMascaraCPF); 
    }

    if (telefoneInput) {
        telefoneInput.removeEventListener('input', aplicarMascaraTelefone);
        telefoneInput.addEventListener('input', aplicarMascaraTelefone);
    }
    
    if (form) {
        form.removeEventListener("submit", lidarComSubmissao);
        form.addEventListener("submit", lidarComSubmissao);
    }
}


function aplicarMascaraCPF(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    e.target.value = value;
}

function aplicarMascaraTelefone(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 10) {
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (value.length > 6) {
        value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else if (value.length > 2) {
        value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    } else {
        value = value.replace(/(\d{0,2})/, '($1');
    }
    e.target.value = value.trim();
}

function lidarComSubmissao(event) {
    event.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();
    const cpf = document.querySelector("#cpf").value.trim();
    const telefone = document.querySelector("#telefone").value.trim();

    if (nome === "" || email === "" || cpf === "" || telefone === "") {
        alert("Preencha todos os campos obrigatórios!");
        return;
    }

    if (!validarEmail(email)) {
        alert("Digite um e-mail válido!");
        return;
    }

    if (!validarCPF(cpf)) {
        alert("Digite um CPF válido no formato 000.000.000-00!");
        return;
    }

    if (!validarTelefone(telefone)) {
        alert("Digite um telefone válido no formato (99) 99999-9999!");
        return;
    }

    alert("Cadastro enviado com sucesso!");
    event.target.reset(); 
}
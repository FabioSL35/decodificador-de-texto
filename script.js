function criptografar() {
    const textoOriginal = document.getElementById('texto').value;
    const chave = 3;

    let textoCriptografado = '';

    for (let i = 0; i < textoOriginal.length; i++) {
        let charCode = textoOriginal.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            textoCriptografado += String.fromCharCode((charCode - 65 + chave) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            textoCriptografado += String.fromCharCode((charCode - 97 + chave) % 26 + 97);
        } else {
            textoCriptografado += textoOriginal[i];
        }
    }

    document.getElementById('resultado').innerText = textoCriptografado;
}

function descriptografar() {
    const textoCriptografado = document.getElementById('texto').value;
    const chave = 3;

    let textoDescriptografado = '';

    for (let i = 0; i < textoCriptografado.length; i++) {
        let charCode = textoCriptografado.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            textoDescriptografado += String.fromCharCode((charCode - 65 - chave + 26 * 2) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            textoDescriptografado += String.fromCharCode((charCode - 97 - chave + 26 * 2) % 26 + 97);
        } else {
            textoDescriptografado += textoCriptografado[i];
        }
    }

    document.getElementById('resultado').innerText = textoDescriptografado;
}

function copiarTexto() {
    const resultado = document.getElementById('resultado');
    const texto = resultado.innerText;

    if (texto) {
        navigator.clipboard.writeText(texto)
            .then(() => alert('Texto copiado com sucesso!'))
            .catch(err => console.error('Erro ao copiar o texto:', err));
    } else {
        alert('Nenhum texto para copiar.');
    }
}

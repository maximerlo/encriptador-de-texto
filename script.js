document.addEventListener("DOMContentLoaded", function () {
    const textArea = document.getElementById("text");
    const resultArea = document.getElementById("result");
    const encryptBtn = document.getElementById("encrypt-btn");
    const decryptBtn = document.getElementById("decrypt-btn");
    const copyBtn = document.getElementById("copy-btn");

    encryptBtn.addEventListener("click", function () {
        const text = textArea.value.toLowerCase();
        const result = encrypt(text);
        resultArea.value = result;
    });

    decryptBtn.addEventListener("click", function () {
        const text = textArea.value.toLowerCase();
        const result = decrypt(text);
        resultArea.value = result;
    });

    copyBtn.addEventListener("click", function () {
        resultArea.select();
        navigator.clipboard.writeText(resultArea.value);
        alert("Texto copiado al portapapeles");
    });

    function encrypt(text) {
        return text.replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }

    function decrypt(text) {
        return text.replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }
});


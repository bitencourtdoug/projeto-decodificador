var textInformed = document.querySelector("#original__text__decoded");
var textEncoded = document.querySelector("#encoded");

function encrypt() {
    var encryptedText = textInformed.value.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    
    document.getElementById('encoded').innerHTML = '<textarea cols="60" rows="12" id="original__text__decoded">' + encryptedText + '</textarea>' + '<button class="copy" id="copy" onclick="copy()">Copiar</button>'
}

function decrypt() {
    var decryptText = textInformed.value.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    
    document.getElementById('encoded').innerHTML = '<textarea cols="60" rows="12" id="original__text__decoded">' + decryptText + '</textarea>' + '<button class="copy" id="copy" onclick="copy()">Copiar</button>'
}

function copy() {
    var textArea = document.getElementById("original__text__decoded");
    
    textArea.select();
    document.execCommand('copy');
    alert("Texto copiado com sucesso!");
}
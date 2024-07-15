var textInformed = document.querySelector("#original__text__decoded");
var textEncoded = document.querySelector("#encoded");
var copyButton = '<button id="copy" onclick="copy()">Copiar</button>' 
var result = '<img src="../assets/High quality products.png" alt="Desenho de um menino segurando uma lupa" >'      

function encrypt() {
    var encryptedText = textInformed.value.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    
    document.getElementById('encoded').innerHTML = '<textarea id="inputText">' + encryptedText + '</textarea>'  + copyButton   
    }    

function decrypt() {
    var decryptText = textInformed.value.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    
    document.getElementById('encoded').innerHTML ='<textarea id="inputText">' + decryptText + '</textarea>'  + copyButton     
    }

function copy() {
    var textArea = document.getElementById("inputText");
    
    textArea.select();
    document.execCommand('copy');
    alert("Texto copiado com sucesso!");
    limpar();
}

function limpar() {
    original__text__decoded.value = "";
    inputText.value = "";
    document.getElementById('encoded').innerHTML = result;

  
}

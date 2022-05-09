const text = document.querySelector(".texto");

function btnencriptar() {
  let bandera = validar(text.value);
  if (bandera) {
    const textoEncriptado = encriptar(text.value);
    mostrarOcultar(textoEncriptado);
  }
}

function encriptar(stringParaEncriptar) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringParaEncriptar = stringParaEncriptar.toLowerCase();
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringParaEncriptar.includes(matrizCodigo[i][0])) {
      stringParaEncriptar = stringParaEncriptar.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringParaEncriptar;
}

function btndesencriptar() {
  let bandera = validar(text.value);
  if (bandera) {
    const textoDesencriptado = desencriptar(text.value);
    mostrarOcultar(textoDesencriptado);
  }
}

function desencriptar(stringParaDesencriptar) {
  let matrizCodigo = [
    ["enter", "e"],
    ["imes", "i"],
    ["ai", "a"],
    ["ober", "o"],
    ["ufat", "u"],
  ];
  stringParaDesencriptar = stringParaDesencriptar.toLowerCase();
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringParaDesencriptar.includes(matrizCodigo[i][0])) {
      stringParaDesencriptar = stringParaDesencriptar.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringParaDesencriptar;
}

function mostrarOcultar(texto) {
  var elem = document.getElementById("mensaje");
  elem.innerHTML = texto;
  document.getElementById("parrafo").style.display = "none";
  document.getElementById("munecoImagen").style.display = "none";
}

var letras = text;

function validar(texto) {
  if (!/^[a-z\s]+$/.test(texto)) {
    mostrarOcultar("Texto Inválido");
    return false;
  }
  return true;
}

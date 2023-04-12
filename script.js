//Dibujos canvas
const canvas = document.getElementById("canvasResultado");
const ctx = canvas.getContext("2d");

function limpiar() {
  ctx.clearRect(0, 0, 800, 800);
}

function dibujarConjuntoA(x,text, t) {

  ctx.beginPath();
  ctx.arc(150 + x, 200, 100, 0, Math.PI * 2);
  if (x == 0 || t == "union") {
    ctx.fillStyle = "rgba(250,250,0,0.1)";
  } else {
    ctx.fillStyle = "rgba(60,179,113,0.1)";
  }
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.font = "30px Arial";
  ctx.fillStyle = "black";
  ctx.fillText(text, 140 + x, 200);

}

function dibujarConjuntoB(x,text, t) {

  ctx.beginPath();
  ctx.arc(350 - x, 200, 100, 0, Math.PI * 2);
  if (x == 0 || t == "union") {
    ctx.fillStyle = "rgba(250,250,0,0.1)";
  } else {
    ctx.fillStyle = "rgba(255,0,0,0.1)";
  }

  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.font = "30px Arial";
  ctx.fillStyle = "black";
  ctx.fillText(text, 340 - x, 200);

}

function dibujarConjuntoC(x,text, t) {
  ctx.beginPath();
  ctx.arc(250, 375 - x, 100, 0, Math.PI * 2);
  if (x == 0 || t == "union") {
    ctx.fillStyle = "rgba(250,250,0,0.1)";
  } else {
    ctx.fillStyle = "rgba(0,0,255,0.1)";
  }
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.font = "30px Arial";
  ctx.fillStyle = "black";
  ctx.fillText(text, 240, 380 - x);

}


//Obtener conjuntos
function getConjuntoA() {
  return new Set(document.getElementById("conjuntoA").value.split(","));
}
function getConjuntoB() {
  return new Set(document.getElementById("conjuntoB").value.split(","));
}
function getConjuntoC() {
  return new Set(document.getElementById("conjuntoC").value.split(","));
}

//Unir conjuntos
function unirConjuntosAB() {
  limpiar()
  const conjuntoA = getConjuntoA();
  const conjuntoB = getConjuntoB();
  if (conjuntoA.has("") || conjuntoB.has("")) {
    alert("Faltan datos");
  } else {
    const resultado = new Set([...conjuntoA, ...conjuntoB]);
    document.getElementById("resultado").innerHTML =
      "Union (A ∪ B): { " +[...resultado]+" }";
    const resultadoInter = new Set(
      [...conjuntoA].filter((a) => conjuntoB.has(a))
    );
    let texta = [...conjuntoA].toString()
    let textb = [...conjuntoB].toString()
    if ([...resultadoInter] == "") {
      let x = 0
      dibujarConjuntoA(x,texta, "union");
      dibujarConjuntoB(x,textb, "union");
    } else {
      let x = 30;
      console.log([...resultadoInter]);
      dibujarConjuntoA(x,texta, "union");
      dibujarConjuntoB(x,textb, "union");
    }
  }
}

function unirConjuntosAC() {
  limpiar()
  const conjuntoA = getConjuntoA();
  const conjuntoC = getConjuntoC();
  if (conjuntoA.has("") || conjuntoC.has("")) {
    alert("Faltan datos");
  } else {
    const resultado = new Set([...conjuntoA, ...conjuntoC]);
    document.getElementById("resultado").innerHTML =
      "Union (A ∪ C): { " + [...resultado]+" }";
    const resultadoInter = new Set(
      [...conjuntoA].filter((a) => conjuntoC.has(a))
    );
    let texta = [...conjuntoA].toString()
    let textc = [...conjuntoC].toString()
    if ([...resultadoInter] == "") {
      let x = 0;
      dibujarConjuntoA(x,texta, "union");
      dibujarConjuntoC(x,textc, "union");
    } else {
      let x = 30;
      dibujarConjuntoA(x,texta, "union");
      dibujarConjuntoC(x,textc, "union");
    }
  }
}

function unirConjuntosBC() {
  limpiar()
  const conjuntoB = getConjuntoB();
  const conjuntoC = getConjuntoC();
  if (conjuntoB.has("") || conjuntoC.has("")) {
    alert("Faltan datos");
  } else {
    const resultado = new Set([...conjuntoB, ...conjuntoC]);
    document.getElementById("resultado").innerHTML =
      "Union (B ∪ C): { " + [...resultado]+" }";
    const resultadoInter = new Set(
      [...conjuntoB].filter((a) => conjuntoC.has(a))
    );
    let textc = [...conjuntoC].toString()
    let textb = [...conjuntoB].toString()
    if ([...resultadoInter] == "") {
      let x = 0;
      dibujarConjuntoB(x,textb, "union");
      dibujarConjuntoC(x,textc, "union");
    } else {
      let x = 30;
      dibujarConjuntoB(x,textb, "union");
      dibujarConjuntoC(x,textc, "union");
    }
  }
}

function unirConjuntosABC() {
  limpiar()
  var resultAB = false, resultAC = false, resultBC = false;
  const conjuntoA = getConjuntoA();
  const conjuntoB = getConjuntoB();
  const conjuntoC = getConjuntoC();
  if (conjuntoA.has("") || conjuntoB.has("") || conjuntoC.has("")) {
    alert("Faltan datos");
  } else {
    const resultado = new Set([...conjuntoA, ...conjuntoB, ...conjuntoC]);
    document.getElementById("resultado").innerHTML =
      "Union (A ∪ B ∪ C): { " + [...resultado] +" }";
    const resultadoAB = new Set([...conjuntoA].filter((a) => conjuntoB.has(a)));
    const resultadoAC = new Set([...conjuntoA].filter((a) => conjuntoC.has(a)));
    const resultadoBC = new Set([...conjuntoB].filter((a) => conjuntoC.has(a)));
    let texta = [...conjuntoA].toString()
    let textb = [...conjuntoB].toString()
    let textc = [...conjuntoC].toString()

    if ([...resultadoAB] == "") {
      resultAB = false;
    } else {
      resultAB = true;
    }

    if ([...resultadoAC] == "") {
      resultAC = false;
    } else {
      resultAC = true;
    }

    if ([...resultadoBC] == "") {
      resultBC = false;
    } else {
      resultBC = true;
    }

    if (resultAB == true && resultAC == true && resultBC == true) {
      let x = 30;
      dibujarConjuntoA(x,texta, "union");
      dibujarConjuntoB(x,textb, "union");
      dibujarConjuntoC(x,textc, "union");
    } else if (resultAB == true && resultAC == true && resultBC == false) {
      let x = 30;
      dibujarConjuntoA(x,texta, "union");
      dibujarConjuntoB(0,textb, "union");
      dibujarConjuntoC(0,textc, "union");
    } else if (resultAB == true && resultAC == false && resultBC == true) {
      let x = 30;
      dibujarConjuntoA(0,texta, "union");
      dibujarConjuntoB(x,textb, "union");
      dibujarConjuntoC(0,textc, "union");
    } else if (resultAB == true && resultAC == false && resultBC == false) {
      let x = 30;
      dibujarConjuntoA(x,texta, "union");
      dibujarConjuntoB(x,textb, "union");
      dibujarConjuntoC(-15,textc, "union");
    } else if (resultAB == false && resultAC == true && resultBC == false) {
      let x = 30;
      dibujarConjuntoA(x,texta, "union");
      dibujarConjuntoB(-38,textb, "union");
      dibujarConjuntoC(x,textc, "union");
    } else if (resultAB == false && resultAC == true && resultBC == true) {
      let x = 30;
      dibujarConjuntoA(0,texta, "union");
      dibujarConjuntoB(0,textb, "union");
      dibujarConjuntoC(x,textc, "union");
    } else if (resultAB == false && resultAC == false && resultBC == true) {
      let x = 30;
      dibujarConjuntoA(-38,texta, "union");
      dibujarConjuntoB(x,textb, "union");
      dibujarConjuntoC(x,textc, "union");
    } else if (resultAB == false && resultAC == false && resultBC == false) {
      let x = 0;
      dibujarConjuntoA(x,texta, "union");
      dibujarConjuntoB(x,textb, "union");
      dibujarConjuntoC(x,textc, "union");
    }

  }
}

//Intersectar conjuntos
function interConjuntosAB() {
  limpiar()
  const conjuntoA = getConjuntoA();
  const conjuntoB = getConjuntoB();
  if (conjuntoA.has("") || conjuntoB.has("")) {
    alert("Faltan datos");
  } else {
    const resultado = new Set([...conjuntoA].filter((a) => conjuntoB.has(a)));
    const resultadoText = [...resultado].length == 0 ? "Vacio" : [...resultado]
    document.getElementById("resultado").innerHTML =
      "Interseccion (A ∩ B): { " + resultadoText+" }";
      let texta = [...conjuntoA].toString()
      let textb = [...conjuntoB].toString()
    if ([...resultado] == "") {
      let x = 0;
      dibujarConjuntoA(x,texta, "inter");
      dibujarConjuntoB(x,textb, "inter");
    } else {
      let x = 30;
      dibujarConjuntoA(x,texta, "inter");
      dibujarConjuntoB(x,textb, "inter");
    }
  }
}

function interConjuntosAC() {
  limpiar()
  const conjuntoA = getConjuntoA();
  const conjuntoC = getConjuntoC();
  if (conjuntoA.has("") || conjuntoC.has("")) {
    alert("Faltan datos");
  } else {
    const resultado = new Set([...conjuntoA].filter((a) => conjuntoC.has(a)));
    const resultadoText = [...resultado].length == 0 ? "Vacio" : [...resultado]
    document.getElementById("resultado").innerHTML =
      "Interseccion (A ∩ C): { " + resultadoText+" }";
      let texta = [...conjuntoA].toString()
      let textc = [...conjuntoC].toString()
    if ([...resultado] == "") {
      let x = 0;
      dibujarConjuntoA(x,texta, "inter");
      dibujarConjuntoC(x,textc, "inter");
    } else {
      let x = 30;
      dibujarConjuntoA(x,texta, "inter");
      dibujarConjuntoC(x,textc, "inter");
    }
  }
}

function interConjuntosBC() {
  limpiar()
  const conjuntoB = getConjuntoB();
  const conjuntoC = getConjuntoC();
  if (conjuntoB.has("") || conjuntoC.has("")) {
    alert("Faltan datos");
  } else {
    const resultado = new Set([...conjuntoB].filter((a) => conjuntoC.has(a)));
    const resultadoText = [...resultado].length == 0 ? "Vacio" : [...resultado]
    document.getElementById("resultado").innerHTML =
      "Interseccion (B ∩ C): { " + resultadoText+" }";
      let textb = [...conjuntoB].toString()
      let textc = [...conjuntoC].toString()
    if ([...resultado] == "") {
      let x = 0;
      dibujarConjuntoB(x,textb, "inter");
      dibujarConjuntoC(x,textc, "inter");
    } else {
      let x = 30;
      dibujarConjuntoB(x,textb, "inter");
      dibujarConjuntoC(x,textc, "inter");
    }
  }
}

function interConjuntosABC() {
  limpiar()
  var resultAB = false, resultAC = false, resultBC = false;
  const conjuntoA = getConjuntoA();
  const conjuntoB = getConjuntoB();
  const conjuntoC = getConjuntoC();
  if (conjuntoA.has("") || conjuntoB.has("") || conjuntoC.has("")) {
    alert("Faltan datos");
  } else {
    const resultado = new Set([...conjuntoA,...conjuntoB,...conjuntoC].filter((a) => conjuntoC.has(a) && conjuntoB.has(a) && conjuntoA.has(a)));
    const resultadoText = [...resultado].length == 0 ? "Vacio" : [...resultado]
    
    document.getElementById("resultado").innerHTML =
      "Interseccion (A ∩ B ∩ C): { " + resultadoText+" }";
    const resultadoAB = new Set([...conjuntoA].filter((a) => conjuntoB.has(a)));
    const resultadoAC = new Set([...conjuntoA].filter((a) => conjuntoC.has(a)));
    const resultadoBC = new Set([...conjuntoB].filter((a) => conjuntoC.has(a)));

    if ([...resultadoAB] == "") {
      resultAB = false;
    } else {
      resultAB = true;
    }

    if ([...resultadoAC] == "") {
      resultAC = false;
    } else {
      resultAC = true;
    }

    if ([...resultadoBC] == "") {
      resultBC = false;
    } else {
      resultBC = true;
    }
    let texta = [...conjuntoA].toString()
    let textb = [...conjuntoB].toString()
    let textc = [...conjuntoC].toString()

    if (resultAB == true && resultAC == true && resultBC == true) {
      let x = 30;
      dibujarConjuntoA(x,texta, "inter");
      dibujarConjuntoB(x,textb, "inter");
      dibujarConjuntoC(x,textc, "inter");
    } else if (resultAB == true && resultAC == true && resultBC == false) {
      let x = 30;
      dibujarConjuntoA(x,texta, "inter");
      dibujarConjuntoB(0,textb, "inter");
      dibujarConjuntoC(0,textc, "inter");
    } else if (resultAB == true && resultAC == false && resultBC == true) {
      let x = 30;
      dibujarConjuntoA(0,texta, "inter");
      dibujarConjuntoB(x,textb, "inter");
      dibujarConjuntoC(0,textc, "inter");
    } else if (resultAB == true && resultAC == false && resultBC == false) {
      let x = 30;
      dibujarConjuntoA(x,texta, "inter");
      dibujarConjuntoB(x,textb, "inter");
      dibujarConjuntoC(-15,textc, "inter");
    } else if (resultAB == false && resultAC == true && resultBC == false) {
      let x = 30;
      dibujarConjuntoA(x,texta, "inter");
      dibujarConjuntoB(-38,textb, "inter");
      dibujarConjuntoC(x,textc, "inter");
    } else if (resultAB == false && resultAC == true && resultBC == true) {
      let x = 30;
      dibujarConjuntoA(0,texta, "inter");
      dibujarConjuntoB(0,textb, "inter");
      dibujarConjuntoC(x,textc, "inter");
    } else if (resultAB == false && resultAC == false && resultBC == true) {
      let x = 30;
      dibujarConjuntoA(-38,texta, "inter");
      dibujarConjuntoB(x,textb, "inter");
      dibujarConjuntoC(x,textc, "inter");
    } else if (resultAB == false && resultAC == false && resultBC == false) {
      let x = 0;
      dibujarConjuntoA(x,texta, "inter");
      dibujarConjuntoB(x,textb, "inter");
      dibujarConjuntoC(x,textc, "inter");
    }
  }


}

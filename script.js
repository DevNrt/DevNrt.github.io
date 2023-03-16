//Dibujos canvas
const canvas = document.getElementById("canvasResultado");
const ctx = canvas.getContext("2d");

function limpiar(){
ctx.clearRect(0,0,800,800);
}
function dibujarConjuntoA(x,t) {
  ctx.beginPath();
  ctx.arc(150 + x, 200, 100, 0, Math.PI * 2);
  if (x == 0 || t=="union") {
    ctx.fillStyle = "rgba(250,250,0,0.1)";
  } else {
    ctx.fillStyle = "rgba(60,179,113,0.1)";
  }
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.font = "30px Arial";
  ctx.fillStyle = "black";
  ctx.fillText("A", 140 + x, 200);

  ctx.fillText("-B", 50, 50);
}

function dibujarConjuntoB(x,t) {
  ctx.beginPath();
  ctx.arc(350 - x, 200, 100, 0, Math.PI * 2);
  if (x == 0 || t=="union") {
    ctx.fillStyle = "rgba(250,250,0,0.1)";
  } else {
    ctx.fillStyle = "rgba(255,0,0,0.1)";
  }

  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.font = "30px Arial";
  ctx.fillStyle = "black";
  ctx.fillText("B", 340 - x, 200);
  ctx.fillText("-B", 50, 50);
}

function dibujarConjuntoC(x,t) {
  ctx.beginPath();
  ctx.arc(250, 375 - x, 100, 0, Math.PI * 2);
  if (x == 0|| t=="union") {
    ctx.fillStyle = "rgba(250,250,0,0.1)";
  } else {
    ctx.fillStyle = "rgba(0,0,255,0.1)";
  }
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.font = "30px Arial";
  ctx.fillStyle = "black";
  ctx.fillText("C", 240, 380 - x);
  ctx.fillText("-B", 50, 50);
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
  const conjuntoA = getConjuntoA();
  const conjuntoB = getConjuntoB();
  if (conjuntoA.has("") || conjuntoB.has("")) {
    alert("Faltan datos");
  } else {
    const resultado = new Set([...conjuntoA, ...conjuntoB]);
    document.getElementById("resultado").innerHTML =
      "Union (A ∪ B): " + [...resultado];
    const resultadoInter = new Set(
      [...conjuntoA].filter((a) => conjuntoB.has(a))
    );
    if ([...resultadoInter] == "") {
      let x = 0;
      dibujarConjuntoA(x,"union");
      dibujarConjuntoB(x,"union");
    } else {
      let x = 30;
      dibujarConjuntoA(x,"union");
      dibujarConjuntoB(x,"union");
    }
  }
}

function unirConjuntosAC() {
  const conjuntoA = getConjuntoA();
  const conjuntoC = getConjuntoC();
  if (conjuntoA.has("") || conjuntoC.has("")) {
    alert("Faltan datos");
  } else {
    const resultado = new Set([...conjuntoA, ...conjuntoC]);
    document.getElementById("resultado").innerHTML =
      "Union (A ∪ C): " + [...resultado];
    const resultadoInter = new Set(
      [...conjuntoA].filter((a) => conjuntoC.has(a))
    );
    if ([...resultadoInter] == "") {
      let x = 0;
      dibujarConjuntoA(x,"union");
      dibujarConjuntoC(x,"union");
    } else {
      let x = 30;
      dibujarConjuntoA(x,"union");
      dibujarConjuntoC(x,"union");
    }
  }
}

function unirConjuntosBC() {
  const conjuntoB = getConjuntoB();
  const conjuntoC = getConjuntoC();
  if (conjuntoB.has("") || conjuntoC.has("")) {
    alert("Faltan datos");
  } else {
    const resultado = new Set([...conjuntoB, ...conjuntoC]);
    document.getElementById("resultado").innerHTML =
      "Union (B ∪ C): " + [...resultado];
    const resultadoInter = new Set(
      [...conjuntoB].filter((a) => conjuntoC.has(a))
    );
    if ([...resultadoInter] == "") {
      let x = 0;
      dibujarConjuntoB(x,"union");
      dibujarConjuntoC(x,"union");
    } else {
      let x = 30;
      dibujarConjuntoB(x,"union");
      dibujarConjuntoC(x,"union");
    }
  }
}

function unirConjuntosABC() {
  var resultAB=false,resultAC=false,resultBC=false;
  const conjuntoA = getConjuntoA();
  const conjuntoB = getConjuntoB();
  const conjuntoC = getConjuntoC();
  if (conjuntoA.has("") || conjuntoB.has("") || conjuntoC.has("")) {
    alert("Faltan datos");
  } else {
    const resultado = new Set([...conjuntoA, ...conjuntoB, ...conjuntoC]);
    document.getElementById("resultado").innerHTML =
      "Union (A ∪ B ∪ C): " + [...resultado];
      const resultadoAB = new Set([...conjuntoA].filter((a) => conjuntoB.has(a)));
      const resultadoAC = new Set([...conjuntoA].filter((a) => conjuntoC.has(a)));
      const resultadoBC = new Set([...conjuntoB].filter((a) => conjuntoC.has(a)));
      
      if ([...resultadoAB] == "") {
        resultAB=false;
      }else{    
        resultAB=true;
      }  
      
      if([...resultadoAC] == ""){
        resultAC=false;
      }else{
        resultAC=true;
      }
  
      if([...resultadoBC] == ""){
        resultBC=false;
      }else{
        resultBC=true;
      }
      
      if(resultAB==true && resultAC==true && resultBC==true){
        let x = 30;
        dibujarConjuntoA(x,"union");
        dibujarConjuntoB(x,"union");
        dibujarConjuntoC(x,"union");
      }else if(resultAB==true && resultAC==true && resultBC==false){
        let x = 30;
        dibujarConjuntoA(x,"union");
        dibujarConjuntoB(0,"union");
        dibujarConjuntoC(0,"union");
      }else if(resultAB==true && resultAC==false && resultBC==true){
        let x = 30;
        dibujarConjuntoA(0,"union");
        dibujarConjuntoB(x,"union");
        dibujarConjuntoC(0,"union");
      }else if(resultAB==true && resultAC==false && resultBC==false){
        let x = 30;
        dibujarConjuntoA(x,"union");
        dibujarConjuntoB(x,"union");
        dibujarConjuntoC(-15,"union");
      }else if(resultAB==false && resultAC==true && resultBC==false){
        let x = 30;
        dibujarConjuntoA(x,"union");
        dibujarConjuntoB(-38,"union");
        dibujarConjuntoC(x,"union");
      }else if(resultAB==false && resultAC==true && resultBC==true){
        let x = 30;
        dibujarConjuntoA(0,"union");
        dibujarConjuntoB(0,"union");
        dibujarConjuntoC(x,"union");
      }else if(resultAB==false && resultAC==false && resultBC==true){
        let x = 30;
        dibujarConjuntoA(-38,"union");
        dibujarConjuntoB(x,"union");
        dibujarConjuntoC(x,"union");
      }else if(resultAB==false && resultAC==false && resultBC==false){
        let x = 0;
        dibujarConjuntoA(x,"union");
        dibujarConjuntoB(x,"union");
        dibujarConjuntoC(x,"union");
      }
    
  }
}

//Intersectar conjuntos
function interConjuntosAB() {
  const conjuntoA = getConjuntoA();
  const conjuntoB = getConjuntoB();
  if (conjuntoA.has("") || conjuntoB.has("")) {
    alert("Faltan datos");
  } else {
    const resultado = new Set([...conjuntoA].filter((a) => conjuntoB.has(a)));
    document.getElementById("resultado").innerHTML =
      "Interseccion (A ∩ B): " + [...resultado];
    if ([...resultado] == "") {
      let x = 0;
      dibujarConjuntoA(x,"inter");
      dibujarConjuntoB(x,"inter");
    } else {
      let x = 30;
      dibujarConjuntoA(x,"inter");
      dibujarConjuntoB(x,"inter");
    }
  }
}

function interConjuntosAC() {
  const conjuntoA = getConjuntoA();
  const conjuntoC = getConjuntoC();
  if (conjuntoA.has("") || conjuntoC.has("")) {
    alert("Faltan datos");
  } else {
    const resultado = new Set([...conjuntoA].filter((a) => conjuntoC.has(a)));
    document.getElementById("resultado").innerHTML =
      "Interseccion (A ∩ C): " + [...resultado];
    if ([...resultado] == "") {
      let x = 0;
      dibujarConjuntoA(x,"inter");
      dibujarConjuntoC(x,"inter");
    } else {
      let x = 30;
      dibujarConjuntoA(x,"inter");
      dibujarConjuntoC(x,"inter");
    }
  }
}

function interConjuntosBC() {
  const conjuntoB = getConjuntoB();
  const conjuntoC = getConjuntoC();
  if (conjuntoB.has("") || conjuntoC.has("")) {
    alert("Faltan datos");
  } else {
    const resultado = new Set([...conjuntoB].filter((a) => conjuntoC.has(a)));
    document.getElementById("resultado").innerHTML =
      "Interseccion (B ∩ C): " + [...resultado];
    if ([...resultado] == "") {
      let x = 0;
      dibujarConjuntoB(x,"inter");
      dibujarConjuntoC(x,"inter");
    } else {
      let x = 30;
      dibujarConjuntoB(x,"inter");
      dibujarConjuntoC(x,"inter");
    }
  }
}

function interConjuntosABC() {
  var resultAB=false,resultAC=false,resultBC=false;
  const conjuntoA = getConjuntoA();
  const conjuntoB = getConjuntoB();
  const conjuntoC = getConjuntoC();
  if (conjuntoA.has("") || conjuntoB.has("") || conjuntoC.has("")) {
    alert("Faltan datos");
  } else {
    const resultado = new Set(
      [...conjuntoA].filter(
        (a) => conjuntoB.has(a),
        (b) => conjuntoC.has(b)
      )
    );
    document.getElementById("resultado").innerHTML =
      "Interseccion (A ∩ B ∩ C): " + [...resultado];
    const resultadoAB = new Set([...conjuntoA].filter((a) => conjuntoB.has(a)));
    const resultadoAC = new Set([...conjuntoA].filter((a) => conjuntoC.has(a)));
    const resultadoBC = new Set([...conjuntoB].filter((a) => conjuntoC.has(a)));
    
    if ([...resultadoAB] == "") {
      resultAB=false;
    }else{    
      resultAB=true;
    }  
    
    if([...resultadoAC] == ""){
      resultAC=false;
    }else{
      resultAC=true;
    }

    if([...resultadoBC] == ""){
      resultBC=false;
    }else{
      resultBC=true;
    }
    
    if(resultAB==true && resultAC==true && resultBC==true){
      let x = 30;
      dibujarConjuntoA(x,"inter");
      dibujarConjuntoB(x,"inter");
      dibujarConjuntoC(x,"inter");
    }else if(resultAB==true && resultAC==true && resultBC==false){
      let x = 30;
      dibujarConjuntoA(x,"inter");
      dibujarConjuntoB(0,"inter");
      dibujarConjuntoC(0,"inter");
    }else if(resultAB==true && resultAC==false && resultBC==true){
      let x = 30;
      dibujarConjuntoA(0,"inter");
      dibujarConjuntoB(x,"inter");
      dibujarConjuntoC(0,"inter");
    }else if(resultAB==true && resultAC==false && resultBC==false){
      let x = 30;
      dibujarConjuntoA(x,"inter");
      dibujarConjuntoB(x,"inter");
      dibujarConjuntoC(-15,"inter");
    }else if(resultAB==false && resultAC==true && resultBC==false){
      let x = 30;
      dibujarConjuntoA(x,"inter");
      dibujarConjuntoB(-38,"inter");
      dibujarConjuntoC(x,"inter");
    }else if(resultAB==false && resultAC==true && resultBC==true){
      let x = 30;
      dibujarConjuntoA(0,"inter");
      dibujarConjuntoB(0,"inter");
      dibujarConjuntoC(x,"inter");
    }else if(resultAB==false && resultAC==false && resultBC==true){
      let x = 30;
      dibujarConjuntoA(-38,"inter");
      dibujarConjuntoB(x,"inter");
      dibujarConjuntoC(x,"inter");
    }else if(resultAB==false && resultAC==false && resultBC==false){
      let x = 0;
      dibujarConjuntoA(x,"inter");
      dibujarConjuntoB(x,"inter");
      dibujarConjuntoC(x,"inter");
    }
  }


}

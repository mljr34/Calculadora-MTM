function limpar(){
document.getElementById("Xa").value = "";
document.getElementById("Xb").value = "";
document.getElementById("Ya").value = "";
document.getElementById("Yb").value = "";
document.getElementById("display").value = "";


}

function calcularDistancia(){
var Xa = Number(document.getElementById("Xa").value);
var Xb = Number(document.getElementById("Xb").value);
var Ya = Number(document.getElementById("Ya").value);
var Yb = Number(document.getElementById("Yb").value);
 
var Xfinal = Math.pow(Xa - Xb,2);
var Yfinal = Math.pow(Ya - Yb,2);
var soma = Xfinal + Yfinal;
var Distancia = Math.sqrt(soma);
document.getElementById("display").value = Distancia.toFixed(2);
}


function calcularPontoMedio(){
    var Xa = Number(document.getElementById("Xa").value);
    var Xb = Number(document.getElementById("Xb").value);
    var Ya = Number(document.getElementById("Ya").value);
    var Yb = Number(document.getElementById("Yb").value);

    var X = (Xa + Xb)/2
    var Y = (Ya + Yb)/2

    document.getElementById("display").value = `PM = (${X.toFixed(3)}, ${Y.toFixed(3)})`;

}

function calcularCoeficiente (){
    var Xa = Number(document.getElementById("Xa").value);
    var Xb = Number(document.getElementById("Xb").value);
    var Ya = Number(document.getElementById("Ya").value);
    var Yb = Number(document.getElementById("Yb").value);

    var parteSup = Ya - Yb
    var parteInf = Xa - Xb
    var m = parteSup / parteInf 

    document.getElementById("display").value = `$m = ${m}`;
}

function calcularEquaçaoDaReta(){
    var Xa = Number(document.getElementById("Xa").value);
    var Xb = Number(document.getElementById("Xb").value);
    var Ya = Number(document.getElementById("Ya").value);
    var Yb = Number(document.getElementById("Yb").value);

var matriz = [
    [Xa, Xb, 1, Xa],
    [Ya, Yb, 1, Ya]
]
var n1 = ((-1 * matriz[0][1])) * matriz [1][0];
var x1 = ((-1 * matriz[0][2])) * matriz [1][1];
var y1 = ((-1 * matriz[0][3])) * matriz [1][2];

var n2 = matriz [0][0] * matriz[1][1];
var x2 = matriz [0][1] * matriz[1][2];
var y2 = matriz [0][2] * matriz[1][3];

var somaX = x1 + x2;
var somaY = y1 + y2;
var somaN = n1 + n2;

somaX = (somaX > 0 ? `+${somaX}` : somaX);
somaY = (somaY > 0 ? `+${somaY}` : somaY);
somaN = (somaN > 0 ? `+${somaN}` : somaN);


document.getElementById("display").value = `${somaX}X ${somaY}Y ${somaN} = 0` 

}

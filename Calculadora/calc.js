window.onload = function(){
    console.log("Cargo la pagina");
    entrada = document.getElementById("entrada");
}

let aux = "";
let aux2 = "";
let operacion = "";

function agregaNumero(numero) {
    if (operacion === "") {
        aux += numero;  //le agregamos el primer valor a aux
    } else {
        aux2 += numero; //le agregamos el valor a aux2
    }
    borrarValores();
}

function realizarOperacion(op) {
    if (op === '=') {
        if (aux !== "" && aux2 !== "") { //calculamos el resultado en caso de que no esten vacios los valores de aux y aux2
            calcularResultado();
            aux2 = "";
        }
    } else {
        if (aux !== "" && aux2 !== "") {
            calcularResultado();
        }
        operacion = op;
    }
    borrarValores();
}

function calcularResultado() {    //se realozan las operaciones que se han seleccionado, pero solo con numero enteros sin usar punto decimal
    const num1 = parseFloat(aux);
    const num2 = parseFloat(aux2);
    let resultado;

    switch (operacion) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
        case '=':

        default:
            resultado = num1;
    }

    aux = resultado.toString();
    aux2 = "";
    operacion = "";
    borrarValores();
}

function borrar() {    //se limpian los valores de aux, aux2 y del operador para realizar alguna otra operaciom
    aux = "";
    aux2 = "";
    operacion = "";
    borrarValores();
}

function borrarValores() {            
    document.getElementById("entrada").value = operacion === "" ? aux : aux2;
}

function suma (a,b,c){
    resultado = a + b + c
    console.log(resultado);
}

function resta (a,b){
    resultado = a - b
    console.log(resultado);
}

function mult (a,b){
    resultado = a * b
    console.log(resultado);
}

function div (a,b){
    resultado = a / b
    console.log(resultado);
}
function cuadrado(a){
    resultado = a * a
    console.log(resultado)
}

module.exports = {suma, resta, mult, div, cuadrado}
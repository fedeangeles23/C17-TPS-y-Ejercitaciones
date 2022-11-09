let dividir = function(num1, num2){
    if (num1 !== 0 && num2 !== 0){
        return "El resultado de la división es: " + (num1 / num2);
    } return "No se puede dividir por cero";
}

module.exports = dividir;
function multiplicar(n1,n2){
    if (n1 !== 0 || n2 !== 0){
        return n1 * n2; 
    }else{ 
        return console.log('Cualquier número multiplicado por cero es 0');
    }
}

console.log('La multiplicación es: ',multiplicar(2,2))

module.export = multiplicar
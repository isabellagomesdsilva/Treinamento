//switch
//if 

exports.execute = function(operador, val1, val2){
    switch(operador){
        case "soma":
            return val1 + val2;
        case "divisão":
            return val1 / val2;
        case "multiplicação": 
            return val1 * val2;
        case "subtração":
            return val1 - val2;
        default:
            return 'operação inválida'
    }
}

exports.execute = (a, b, c) =>{
    if(a === 'soma') return b + c
    if(a === 'subtracao') return b - c
    if(a === 'divisao') return b / c
    if(a === 'multiplicacao') return b * c
    throw 'Tipo de operação inválida!'
}
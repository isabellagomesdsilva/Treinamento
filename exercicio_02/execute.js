exports.execute = function execute (x, y, z) {
    if (x === 'soma'){
        return y + z
    } else if (x === 'subtracao') {
        return y - z
    } else if (x === 'multiplicacao'){
        return y * z
    } else if (x === 'divisao'){
        return y / z
    } else {
        return "Operação Inválida"
    }
}
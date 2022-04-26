
const calculate = (fn, x, y)=> fn(x, y)

function soma(x, y) {
    return x + y
}

function sub(x, y) {
    return x - y
}

console.log("soma: ", calculate(soma, 2, 2))
console.log("sub: ", calculate(sub, 2, 2))
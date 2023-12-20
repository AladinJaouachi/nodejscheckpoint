import gen from "generate-password"


var pass = gen.generate({
    length: 10,
    numbers: true,
    symbols: true
})

console.log("this password generated : " , pass)
console.log("number of characters " , pass.length)

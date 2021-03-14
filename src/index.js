module.exports = function reverse (n) {
let x = Math.abs(n).toString()
let res = x.split('').reverse().join('')
return res
}

// Given the following code, predict the output:

var favoriteFood1 = { name: 'Cake' }
var favoriteFood2 = { name: 'Cake' }
var favoriteFood3 = favoriteFood1

console.log(favoriteFood1.name === favoriteFood1.name)
console.log(favoriteFood1.name === favoriteFood2.name)
console.log(favoriteFood1.name === favoriteFood3.name)

console.log(favoriteFood1 === favoriteFood1)
console.log(favoriteFood1 === favoriteFood2)
console.log(favoriteFood1 === favoriteFood3)

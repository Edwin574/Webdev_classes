

function greeting() {
console.log('First funcyion')
}
greeting()
greeting()

function greet(myname) {
    console.log('Hello,there '+ myname)
}
greet('Edwin')
greet('Edwin')
greet('Edwin')
greet('Edwin')
greet('Edwin')
greet('Edwin')



function circleArea(radius) {
    const pi = 22/7;
    let area=pi*radius**2
    console.log('The area is',area)
}
circleArea(7)

function square(n) {
    var n=prompt('Enter the number')
    let theSquare = n**2
    console.log(theSquare)
}
square()

function squareRoot(k) {
    var k = prompt('Enter the number to find squareroot')
    let theSquareRoot = Math.sqrt(k)
    console.log(theSquareRoot)
}
squareRoot()

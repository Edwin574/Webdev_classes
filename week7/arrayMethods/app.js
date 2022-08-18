const progLanguages = ['C', 'C++', 'Python', 'Java', 'Javascript', 'php', 'swift', 'kotlin', 'R', 'C#'];
const editors = ['sublimetext', 'Vscode', 'Notepad'];


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const evenNumbers = (num) => {
    return (num % 2 === 0)
}



const squares = (item, index, arr) => {
    arr[index] = item * item

}

const oddNumbers = (item, index, arr) => {
    arr[index] = (2 * (item) + 1)

}

console.log(myNumbers.filter(evenNumbers))
console.log(editors.toString())


console.log(myNumbers.findIndex(evenNumbers))
console.log(Array.from('computer'))
console.log(myNumbers.forEach(oddNumbers))
console.log(myNumbers)

console.log(progLanguages.length)
console.log(progLanguages.sort())
console.log(progLanguages.indexOf('Julia'))
console.log(progLanguages.concat(editors))

console.log(progLanguages.at(8))
console.log(progLanguages.pop())
progLanguages.push('Scala', 'PROLOG')
console.log(progLanguages.shift())
console.log(progLanguages)

console.log(progLanguages.unshift())
console.log(progLanguages)
console.log(progLanguages.reverse())
console.log(progLanguages.splice(0, 3, 'BASIC'))
console.log(progLanguages)
console.log(progLanguages.slice(0, 7))
console.log(progLanguages.join('  '))
console.log(progLanguages)
editors.fill('Emacs', 1, 3)
console.log(editors)






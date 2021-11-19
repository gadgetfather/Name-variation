const input = document.querySelector('#input')
const numberOfChar = document.querySelector('#answer1')
const firstChar = document.querySelector('#answer2')
const lastChar = document.querySelector('#answer3')
const lowerCase = document.querySelector('#answer4')
const upperCase = document.querySelector('#answer5')
const capitalize = document.querySelector('#answer6')


input.addEventListener('input',function run(){
    const value = input.value

    numberOfChar.textContent = getNumberofChar(value)
    firstChar.textContent = getFirstChar(value)
    lastChar.textContent= getLastChar(value)
    lowerCase.textContent= getLowerCase(value)
    upperCase.textContent = getUppercase(value)
    if (value) {
        capitalize.textContent = getCapitalize(value);
    } else {
        capitalize.textContent = "";
    }
})

function getNumberofChar(value){
    return value.length
}
function getFirstChar(value){
    return value[0]
}

function getLastChar(value){
    return value[value.length -1]
}

function getLowerCase (value){
    return value.toLowerCase()
}

function getUppercase(value){
    return value.toUpperCase()
}

function getCapitalize(value){
    return value[0].toUpperCase()+ value.substring(1).toLowerCase()
}
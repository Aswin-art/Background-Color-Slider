const red = document.getElementById('redValue')
const green = document.getElementById('greenValue')
const blue = document.getElementById('blueValue')

const redSlider = document.getElementById('redSlider')
const greenSlider = document.getElementById('greenSlider')
const blueSlider = document.getElementById('blueSlider')

const container = document.querySelector('.container')

const textHexcode = document.getElementById('textHexcode')

redSlider.addEventListener('input', () => {
    red.innerHTML = redSlider.value
    container.style.backgroundColor = 'rgb(' + redSlider.value + ',' + greenSlider.value + ',' + blueSlider.value + ')'
    const hexcode = setHexCode(redSlider.value, greenSlider.value, blueSlider.value)
    textHexcode.innerHTML = '#' + hexcode
})
greenSlider.addEventListener('input', () => {
    green.innerHTML = greenSlider.value
    container.style.backgroundColor = 'rgb(' + redSlider.value + ',' + greenSlider.value + ',' + blueSlider.value + ')'
    const hexcode = setHexCode(redSlider.value, greenSlider.value, blueSlider.value)
    textHexcode.innerHTML = '#' + hexcode
})
blueSlider.addEventListener('input', () => {
    blue.innerHTML = blueSlider.value
    container.style.backgroundColor = 'rgb(' + redSlider.value + ',' + greenSlider.value + ',' + blueSlider.value + ')'
    const hexcode = setHexCode(redSlider.value, greenSlider.value, blueSlider.value)
    textHexcode.innerHTML = '#' + hexcode
})

// function valueToHex(value){
//     const hexvalue = value.toString(16)
//     return hexvalue
// }

// function convertToHexCode(r, g, b){
//     return (valueToHex(r) + valueToHex(g) + valueToHex(b))
// }

function setHexCode(r, g, b){
    const rHex = parseInt(r, 10).toString(16)
    const gHex = parseInt(g, 10).toString(16)
    const bHex = parseInt(b, 10).toString(16)

    return rHex + gHex + bHex
}
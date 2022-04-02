const tileDisplay = document.querySelector('.tile-container')
const keyboard = document.querySelector('.key-container')

const keys = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'ENTER',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    '«',    // Backspace
]

keys.forEach(key => {
    const buttonElement = document.createElement('button')      // Create Button for eact keys
    buttonElement.textContent = key                             // Set the text of the button
    buttonElement.setAttribute('id', key)                       // Set the ID name for button
    keyboard.append(buttonElement)                              // Add New buttons to the DOM
})
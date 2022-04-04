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

const guessRows = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]

// Create grid
guessRows.forEach((guessRow, guessRowIndex) => {
    const rowElement = document.createElement('div')
    rowElement.setAttribute('id', 'guessRow-' +guessRowIndex)
    guessRow.forEach((guess, guessIndex) => {
        const tileElement = document.createElement('div')
        tileElement.setAttribute('id', 'guessRow-' + guessRowIndex + '-tile-' + guessIndex)
        tileElement.classList.add('tile')
        rowElement.append(tileElement)
    })
    tileDisplay.append(rowElement)
})

const handleClick = () => {
    console.log('clicked')
}

// Create Keyboard keys
keys.forEach(key => {
    const buttonElement = document.createElement('button')      // Create Button for eact keys
    buttonElement.textContent = key                             // Set the text of the button
    buttonElement.setAttribute('id', key)                       // Set the ID name for button
    buttonElement.addEventListener('click', handleClick)        // Add event listener to the button
    keyboard.append(buttonElement)                              // Add New buttons to the DOM
})
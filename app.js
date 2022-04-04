const tileDisplay = document.querySelector('.tile-container')
const keyboard = document.querySelector('.key-container')

const wordle = "SUPER"

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

let currentRow = 0
let currentTile = 0

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

const handleClick = (letter) => {
    console.log('clicked', letter)
    addLetter(letter)
}

const addLetter = (letter) => {
    const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
    tile.textContent = letter                               // Update UI
    guessRows[currentRow][currentTile] = letter             // Update guessRows variable for checking
    tile.setAttribute('data', letter)
    currentTile++
    console.log('guessRows', guessRows)
}

// Create Keyboard keys
keys.forEach(key => {
    const buttonElement = document.createElement('button')      // Create Button for eact keys
    buttonElement.textContent = key                             // Set the text of the button
    buttonElement.setAttribute('id', key)                       // Set the ID name for button
    buttonElement.addEventListener('click', () => handleClick(key))        // Add event listener to the button
    keyboard.append(buttonElement)                              // Add New buttons to the DOM
})
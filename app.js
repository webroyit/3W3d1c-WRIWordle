const tileDisplay = document.querySelector('.tile-container')
const keyboard = document.querySelector('.key-container')
const messageDisplay = document.querySelector('.message-container')

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
let isGame = false

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
    if (letter === '«') {
        deleteLetter()
        console.log('guessRows', guessRows)
        return 
    }
    if (letter === 'ENTER') {
        checkRow()
        console.log('guessRows', guessRows)
        return
    }
    addLetter(letter)
    console.log('guessRows', guessRows)
}

const addLetter = (letter) => {
    if (currentTile < 5 && currentRow < 6) {
        const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
        tile.textContent = letter                               // Update UI
        guessRows[currentRow][currentTile] = letter             // Update guessRows variable for checking
        tile.setAttribute('data', letter)
        currentTile++
    }
}

const deleteLetter = (letter) => {
    if (currentTile > 0) {
        currentTile--
        const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
        tile.textContent = ''
        guessRows[currentRow][currentTile] = ''
        tile.setAttribute('data', '')
    }
}

const checkRow = () => {
    const guess = guessRows[currentRow].join('')

    if (currentTile > 4) {
        console.log("guess is " + guess, wordle)
        flipTile()
        
        if (wordle == guess) {
            showMessage("Match")
            isGame = true
            return
        } else {
            if (currentRow >= 5) {
                isGame = true
                showMessage("Game Over")
                return
            }
            if (currentRow < 5) {
                currentRow++
                currentTile = 0
            }
        }
    }
}

const showMessage = (message) => {
    const messageElement = document.createElement('p')
    messageElement.textContent = message
    messageDisplay.append(messageElement)

    // Remove message after 2 seconds
    setTimeout(() => messageDisplay.removeChild(messageElement), 2000)
}

// Add colors
const flipTile = () => {
    // .childNodes get all the children of parent
    const rowTiles = document.querySelector('#guessRow-' + currentRow).childNodes
    rowTiles.forEach((tile, index) => {
        const dataLetter = tile.getAttribute('data')

        setTimeout(() => {
            tile.classList.add('flip')
            
            if (dataLetter == wordle[index]) {
                tile.classList.add('green-overlay')
            } else if (wordle.includes(dataLetter)) {
                tile.classList.add('yellow-overlay')
            } else {
                tile.classList.add('grey-overlay')
            }
        }, 500 * index)     // Increment each one by index so that they do not flip at the same time
    })
}

// Create Keyboard keys
keys.forEach(key => {
    const buttonElement = document.createElement('button')      // Create Button for eact keys
    buttonElement.textContent = key                             // Set the text of the button
    buttonElement.setAttribute('id', key)                       // Set the ID name for button
    buttonElement.addEventListener('click', () => handleClick(key))        // Add event listener to the button
    keyboard.append(buttonElement)                              // Add New buttons to the DOM
})
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let cellsButtons = document.querySelectorAll('.cell');
let resetButton = document.querySelector('#reset');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle player moves
const ticTacToe = (index) => {
    // Check if the cell is already filled
    if (cells[index] !== '') return;

    // Update the game state
    cells[index] = currentPlayer;
    cellsButtons[index].textContent = currentPlayer;

    // Check for winning conditions
    for (const condition of conditions) {
        const [a, b, c] = condition;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            result.textContent = `${currentPlayer} wins!`;
            disableButtons();
            return; // Exit the function to prevent further moves
        }
    }

    // Check for a draw
    if (!cells.includes('')) {
        result.textContent = "It's a draw!";
        disableButtons();
        return;
    }

    // Switch to the other player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    result.textContent = `Current Player: ${currentPlayer}`;
};

// Function to disable buttons after the game ends
const disableButtons = () => {
    cellsButtons.forEach((button) => {
        button.disabled = true;
    });
};

// Function to reset the game
const resetGame = () => {
    cells = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';

    cellsButtons.forEach((button, index) => {
        button.textContent = '';
        button.disabled = false;

let board;
let score;
let highScore = 0;
const boardSize = 4;
let combinedTiles = []; // Track which tiles were combined

document.addEventListener('DOMContentLoaded', () => {
    initializeGame();
    document.addEventListener('keydown', handleKeyPress);
    document.querySelector('.new-game-btn').addEventListener('click', startNewGame);
});

function initializeGame() {
    board = Array.from({ length: boardSize }, () => Array(boardSize).fill(0));
    score = 0;
    combinedTiles = [];
    document.getElementById('score').textContent = `Score: ${score}`;
    document.getElementById('high-score').textContent = `High Score: ${highScore}`;
    addRandomTile();
    addRandomTile();
    renderBoard();
}



function addRandomTile() {
    const emptyTiles = [];
    for (let r = 0; r < boardSize; r++) {
        for (let c = 0; c < boardSize; c++) {
            if (board[r][c] === 0) {
                emptyTiles.push({ r, c });
            }
        }
    }
    if (emptyTiles.length === 0) return;

    const { r, c } = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
    board[r][c] = Math.random() < 0.9 ? 2 : 4;
}

function renderBoard() {
    const gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = '';

    for (let r = 0; r < boardSize; r++) {
        for (let c = 0; c < boardSize; c++) {
            const tileValue = board[r][c];
            const tile = document.createElement('div');
            tile.classList.add('tile');
            tile.textContent = tileValue === 0 ? '' : tileValue;
            tile.style.backgroundColor = getTileColor(tileValue);
            tile.dataset.value = tileValue;

            if (combinedTiles.some(t => t.r === r && t.c === c)) {
                tile.classList.add('tile-merge');
            }

            gridContainer.appendChild(tile);
        }
    }
    animateTiles();
}

function getTileColor(value) {
    switch (value) {
        case 2: return '#eee4da';
        case 4: return '#ede0c8';
        case 8: return '#f2b179';
        case 16: return '#f59563';
        case 32: return '#f67c5f';
        case 64: return '#f65e3b';
        case 128: return '#edcf72';
        case 256: return '#edcc61';
        case 512: return '#edc850';
        case 1024: return '#edc53f';
        case 2048: return '#edc22e';
        default: return '#cdc1b4';
    }
}

function animateTiles() {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
        const value = parseInt(tile.dataset.value);
        if (value > 0) {
            tile.style.transform = 'scale(1.1)';
            setTimeout(() => {
                tile.style.transform = 'scale(1)';
            }, 100);
        }
    });
}

function handleKeyPress(event) {
    let moved = false;
    switch (event.key) {
        case 'ArrowUp':
            moved = move('up');
            break;
        case 'ArrowDown':
            moved = move('down');
            break;
        case 'ArrowLeft':
            moved = move('left');
            break;
        case 'ArrowRight':
            moved = move('right');
            break;
    }
    if (moved) {
        addRandomTile();
        renderBoard();
    }
}

function move(direction) {
    let moved = false;
    let merged = false; // Track if any tiles were merged
    combinedTiles = []; // Reset combined tiles tracking

    if (direction === 'up') {
        for (let c = 0; c < boardSize; c++) {
            let column = [];
            for (let r = 0; r < boardSize; r++) {
                if (board[r][c] !== 0) column.push({ value: board[r][c], r, c });
            }
            const originalColumn = column.map(t => t.value); // Keep the original column for comparison
            column = merge(column);
            for (let r = 0; r < boardSize; r++) {
                if (board[r][c] !== column[r].value) moved = true;
                if (originalColumn[r] !== column[r].value) merged = true;
                board[r][c] = column[r].value;
                if (column[r].merged) combinedTiles.push({ r, c });
            }
        }
    } else if (direction === 'down') {
        for (let c = 0; c < boardSize; c++) {
            let column = [];
            for (let r = boardSize - 1; r >= 0; r--) {
                if (board[r][c] !== 0) column.push({ value: board[r][c], r, c });
            }
            const originalColumn = column.map(t => t.value); // Keep the original column for comparison
            column = merge(column);
            for (let r = boardSize - 1; r >= 0; r--) {
                if (board[r][c] !== column[boardSize - 1 - r].value) moved = true;
                if (originalColumn[boardSize - 1 - r] !== column[boardSize - 1 - r].value) merged = true;
                board[r][c] = column[boardSize - 1 - r].value;
                if (column[boardSize - 1 - r].merged) combinedTiles.push({ r, c });
            }
        }
    } else if (direction === 'left') {
        for (let r = 0; r < boardSize; r++) {
            let row = [];
            for (let c = 0; c < boardSize; c++) {
                if (board[r][c] !== 0) row.push({ value: board[r][c], r, c });
            }
            const originalRow = row.map(t => t.value); // Keep the original row for comparison
            row = merge(row);
            for (let c = 0; c < boardSize; c++) {
                if (board[r][c] !== row[c].value) moved = true;
                if (originalRow[c] !== row[c].value) merged = true;
                board[r][c] = row[c].value;
                if (row[c].merged) combinedTiles.push({ r, c });
            }
        }
    } else if (direction === 'right') {
        for (let r = 0; r < boardSize; r++) {
            let row = [];
            for (let c = boardSize - 1; c >= 0; c--) {
                if (board[r][c] !== 0) row.push({ value: board[r][c], r, c });
            }
            const originalRow = row.map(t => t.value); // Keep the original row for comparison
            row = merge(row);
            for (let c = boardSize - 1; c >= 0; c--) {
                if (board[r][c] !== row[boardSize - 1 - c].value) moved = true;
                if (originalRow[boardSize - 1 - c] !== row[boardSize - 1 - c].value) merged = true;
                board[r][c] = row[boardSize - 1 - c].value;
                if (row[boardSize - 1 - c].merged) combinedTiles.push({ r, c });
            }
        }
    }

    if (merged) {
        updateScore();
    }
    return moved;
}

function merge(arr) {
    let result = [];
    let skip = false;

    for (let i = 0; i < arr.length; i++) {
        if (skip) {
            skip = false;
            continue;
        }
        if (i < arr.length - 1 && arr[i].value === arr[i + 1].value) {
            result.push({ value: arr[i].value * 2, merged: true });
            score += arr[i].value * 2;
            skip = true;
        } else {
            result.push({ value: arr[i].value, merged: false });
        }
    }

    while (result.length < boardSize) {
        result.push({ value: 0, merged: false });
    }

    return result;
}

function updateScore() {
    document.getElementById('score').textContent = `Score: ${score}`;
    if (score > localStorage.getItem('High-Score')) {
        localStorage.setItem('High-Score', score);
        document.getElementById('high-score').textContent = `High Score: ${localStorage.getItem('High-Score')}`;
    }
}

function startNewGame() {
    initializeGame();
}

function handleKeyPress(event) {
    let moved = false;
    switch (event.key) {
        case 'ArrowUp':
            moved = move('up');
            break;
        case 'ArrowDown':
            moved = move('down');
            break;
        case 'ArrowLeft':
            moved = move('left');
            break;
        case 'ArrowRight':
            moved = move('right');
            break;
    }
    if (moved) {
        addRandomTile();
        renderBoard();
    }
}

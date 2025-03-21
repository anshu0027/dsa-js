function exist(board, word) {
    let rows = board.length, cols = board[0].length;

    function dfs(r, c, index) {
        if (index === word.length) return true; // Found full word
        if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[index]) return false;

        let temp = board[r][c];
        board[r][c] = '#'; // Mark as visited

        let found = dfs(r + 1, c, index + 1) ||
            dfs(r - 1, c, index + 1) ||
            dfs(r, c + 1, index + 1) ||
            dfs(r, c - 1, index + 1);

        board[r][c] = temp; // Undo visit
        return found;
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === word[0] && dfs(r, c, 0)) {
                return true;
            }
        }
    }

    return false;
}

// Example
let board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
];
console.log(exist(board, "ABCCED")); // Output: true
console.log(exist(board, "SEE"));    // Output: true
console.log(exist(board, "ABCB"));   // Output: false



// Using Recursion
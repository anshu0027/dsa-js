class TicTacToe {
    constructor(n) {
        this.n = n;
        this.rows = Array(n).fill(0);
        this.cols = Array(n).fill(0);
        this.diagonal = 0;
        this.antiDiagonal = 0;
    }

    move(row, col, player) {
        let add = player === 1 ? 1 : -1;

        this.rows[row] += add;
        this.cols[col] += add;
        if (row === col) this.diagonal += add;
        if (row + col === this.n - 1) this.antiDiagonal += add;

        if (Math.abs(this.rows[row]) === this.n ||
            Math.abs(this.cols[col]) === this.n ||
            Math.abs(this.diagonal) === this.n ||
            Math.abs(this.antiDiagonal) === this.n) {
            return player;
        }
        return 0;
    }
}

let game = new TicTacToe(3);
console.log(game.move(0, 0, 1)); // Output: 0
console.log(game.move(0, 2, 2)); // Output: 0
console.log(game.move(2, 2, 1)); // Output: 0
console.log(game.move(1, 1, 2)); // Output: 0
console.log(game.move(2, 0, 1)); // Output: 0
console.log(game.move(1, 0, 2)); // Output: 0
console.log(game.move(2, 1, 1)); // Output: 1 (Player 1 wins)

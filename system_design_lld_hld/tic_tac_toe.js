/*
its a square 2D matrix game, nxn, each cell is a square
in this case it will be integer cell, x, o, empty
winner: player1 or player2 or yet to be decided or draw

board class
    initialise board for 2D matrix
    getBoard()
    getWinner()
    getCurrentPlayer() -flip from 1 to 2 and 2 to 1
    makeMove(Move m), move is defined by player and current cell of move

user class
    userId
    stats (winns, loses)
    profile

Game
    initialise()
    undoMove()
    game_id
    userId1=>User
    userId2=>User
    List<Move>


order n time winner
    in this game the deciding factor ie finding a winner can be calculated when the player has called Move
    so the calculation and runtime is much faster as the algo has to just look at row|col|diagonal in which
    player currently made the move. this is how overall complexity is reduced to order n to find the winner
*/

function TicTacToe() {
    function createBoard(board = [][]) {
        this.board = board
        this.rowSum = new Array(n) //for optimisation and not via looping
        this.colSum = new Array(n) //for optimisation
        this.diagSum = -1 //for optimisation
        this.revDiagSum = -1 //for optimisation
        this.winner
    }

    function move(player, row, col) {
        //check for boundary conditions
        if (row < 0 || col < 0 || row > n || col || n) throw new Error('out of houndary')
        else if (board[row][col] !== 0) throw new Error('cell is already occupied')
        else if (player !== 0 && player !== 1) throw new Error('invalid player')
        else if (getWinner !== 0) throw new Error('baord is decided')
        else {
            let isPlayerFlag = player === 0 ? -1 : +1
            board[row][col] = isPlayerFlag

            //technique 1 a brute force one
            let winRow = true, winCol = true, winDiag = true, winRevDiag = true
            for (let i = 0; i < n; i++) {
                //check for row
                if (board[row][i] !== player) {
                    winRow = false
                }
                //check for col
                if (board[i][col] !== player) {
                    winCol = false
                }
                //check for diagonal
                if (row === col) {
                    if (board[i][i] !== player) {
                        winDiag = false
                    }
                }
                //check for reverse diagonal
                if (row === n - 1 - col) {
                    if (board[i][n - 1 - i] !== player) {
                        winRevDiag = false
                    }
                }

            }
            if (winRow || winCol || winDiag || winRevDiag)
                return isPlayerFlag

            //technique 2 integer one
            this.rowSum[row] += player
            this.rowSum[col] += player
            if (row === col) this.diagSum += player
            if (row === n - 1 - col) this.revDiagSum += player
            if (this.rowSum[row] === n || this.colSum[col] === n || this.diagSum === n || this.revDiagSum === n)
                return winner
            return getWinner()
        }
    }

    function getWinner(){
        return winner
    }
}

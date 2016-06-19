$(document).ready(function() {
    var win = false
    var playerTurn = 1
    var col1Counter = 1
    var col2Counter = 1
    var col3Counter = 1

    var board = [
        ["0", "0", "0"],
        ["0", "0", "0"],
        ["0", "0", "0"],
    ]

    function isOdd(num) {
        if (num % 2 == 1) {
            return true
        } else {
            return false
        }
    }

    function verticalCheck(board, col, row) {
        if (board[row][col] == board[row - 1][col] &&
            board[row - 1][col] == board[row - 2][col] &&
            board[row - 2][col] == board[row - 3][col]) {
            win = true
            if (win == true && isOdd(playerTurn) == false) {
                alert("X Wins!")
                location.reload();
            } else if (win == true && isOdd(playerTurn) == true) {
                alert("O Wins!")
                location.reload();
            }
        }
    }

    function horizontalCheck(board, rowNum) {
        var row = board[rowNum]
        var rowContent = row.join('')
        if (rowContent.includes("XXX") == true) {
            win = true
            alert("X Wins!")
            location.reload();
        } else if (rowContent.includes("OOO") == true) {
            win = true
            alert("O Wins!")
            location.reload();
        }
    }

    function diagonalCheck(board, col, row) {
        diagonal = []
        for (var i = -4; i < 4; i++) {
            try {
                if (board[row + i][col + i] === "undefined") {} else {
                    diagonal.push(board[row + i][col + i])
                }
            } catch (e) {}
        }
        var diagonalContent = diagonal.join('')
        if (diagonalContent.includes("XXX") == true) {
            win = true
            alert("X Wins!")
            location.reload();
        } else if (diagonalContent.includes("OOO") == true) {
            win = true
            alert("O Wins!")
            location.reload();
        }
    }

    function invDiagonalCheck(board, col, row) {
        invDiagonal = []
        for (var i = -4; i < 4; i++) {
            try {
                if (board[row + (-i)][col + i] === "undefined") {} else {
                    invDiagonal.push(board[row + (-i)][col + i])
                }
            } catch (e) {}
        }
        var invDiagonalContent = invDiagonal.join('')
        if (invDiagonalContent.includes("XXX") == true) {
            win = true
            alert("X Wins!")
            location.reload();
        } else if (invDiagonalContent.includes("OOO") == true) {
            win = true
            alert("O Wins!")
            location.reload();
        }
    }

    function checkWin(board, col, row){
      horizontalCheck(board, row)
      diagonalCheck(board, col, row)
      invDiagonalCheck(board, col, row)
      verticalCheck(board, col, row)
    }

    $('#col1.square').click(function(e) {
        e.preventDefault();
        playerTurn += 1
        if (isOdd(playerTurn) == true) {
            $('#row' + col1Counter + ' #col1').addClass('black');
            col1Counter += 1
            board[(col1Counter - 2)][0] = "X"
            checkWin(board, 0, (col1Counter - 2))
        } else if (isOdd(playerTurn) == false) {
            $('#row' + col1Counter + ' #col1').addClass('red');
            col1Counter += 1
            board[(col1Counter - 2)][0] = "O"
            checkWin(board, 0, (col1Counter - 2))
        }
    })

    $('#col2.square').click(function(e) {
        e.preventDefault();
        playerTurn += 1
        if (isOdd(playerTurn) == true) {
            $('#row' + col2Counter + ' #col2').addClass('black');
            col2Counter += 1
            board[(col2Counter - 2)][1] = "X"
            checkWin(board, 1, (col2Counter - 2))
        } else if (isOdd(playerTurn) == false) {
            $('#row' + column2_counter + ' #col2').addClass('red');
            col2Counter += 1
            board[(col2Counter - 2)][1] = "O"
            checkWin(board, 1, (col2Counter - 2))
        }
    })

    $('#col3.squares').click(function(e) {
        e.preventDefault();
        playerTurn += 1
        if (isOdd(playerTurn) == true) {
            $('#row' + col3Counter + ' #col3').addClass('black');
            col3Counter += 1
            board[(col3Counter - 2)][2] = "X"
            checkWin(board, 2, (col3Counter - 2))
        } else if (isOdd(playerTurn) == false) {
            $('#row' + col3Counter + ' #col3').addClass('red');
            col3Counter += 1
            board[(col3Counter - 2)][2] = "O"
            checkWin(board, 2, (col3Counter - 2))
        }
    })

});

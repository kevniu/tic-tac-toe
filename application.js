$(document).ready(function() {
    var win = false;
    var playerTurn = 1;

    var board = [
        ["0", "0", "0"],
        ["0", "0", "0"],
        ["0", "0", "0"],
    ]

    function isOdd(num) {
        if (num % 2 == 1) {
            return true;
        } else {
            return false;
        }
    }

    function verticalCheck(board, row, col) {
        if (board[row][col] == board[row - 1][col] &&
            board[row - 1][col] == board[row - 2][col]) {
            win = true
            if (win == true && isOdd(playerTurn) == true) {
                alert("X Wins!")
                location.reload();
            } else if (win == true && isOdd(playerTurn) == false) {
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

    function diagonalCheck(board) {
        if (board[0][0] == board[1][1] &&
            board[1][1] == board[2][2]) {
              win = true;
        }
        if (win == true && isOdd(playerTurn) == true) {
            alert("X Wins!");
            location.reload();
        } else if (win == true && isOdd(playerTurn) == false) {
            alert("O Wins!");
            location.reload();
        }
    }

    function invDiagonalCheck(board) {
        if (board[0][0] == board[1][1] &&
            board[1][1] == board[2][2]) {
              win = true;
        }
        if (win == true && isOdd(playerTurn) == true) {
            alert("X Wins!");
            location.reload();
        } else if (win == true && isOdd(playerTurn) == false) {
            alert("O Wins!");
            location.reload();
        }
    }

    function checkWin(board, row, col){
      horizontalCheck(board, row)
      diagonalCheck(board)
      invDiagonalCheck(board)
      verticalCheck(board, row, col)
    }

    $('#sq1.square').click(function(e) {
        e.preventDefault();
        playerTurn += 1
        if (isOdd(playerTurn) == true) {
            $('#sq1').append("<img src='assets/x.png' height='180px' width='180px'>");
            board[0][0] = "X";
            checkWin(board, 0, 0);
        } else if (isOdd(playerTurn) == false) {
            $('#sq1').append("<img src='assets/o.png' height='180px' width='180px'>");
            board[0][0] = "O";
            checkWin(board, 0, 0);
        }
    })

    $('#sq2.square').click(function(e) {
        e.preventDefault();
        playerTurn += 1
        if (isOdd(playerTurn) == true) {
            $('#sq2').append("<img src='assets/x.png' height='180px' width='180px'>");
            board[0][1] = "X";
            checkWin(board, 0, 1);
        } else if (isOdd(playerTurn) == false) {
            $('#sq2').append("<img src='assets/o.png' height='180px' width='180px'>");
            board[0][1] = "O";
            checkWin(board, 0, 1);
        }
    })

    $('#sq3.square').click(function(e) {
        e.preventDefault();
        playerTurn += 1
        if (isOdd(playerTurn) == true) {
            $('#sq3').append("<img src='assets/x.png' height='180px' width='180px'>");
            board[0][2] = "X";
            checkWin(board, 0, 2);
        } else if (isOdd(playerTurn) == false) {
            $('#sq3').append("<img src='assets/o.png' height='180px' width='180px'>");
            board[0][2] = "O";
            checkWin(board, 0, 2);
        }
    })

    $('#sq4.square').click(function(e) {
        e.preventDefault();
        playerTurn += 1
        if (isOdd(playerTurn) == true) {
            $('#sq4').append("<img src='assets/x.png' height='180px' width='180px'>");
            board[1][0] = "X";
            checkWin(board, 1, 0);
        } else if (isOdd(playerTurn) == false) {
            $('#sq4').append("<img src='assets/o.png' height='180px' width='180px'>");
            board[1][0] = "O";
            checkWin(board, 1, 0);
        }
    })

    $('#sq5.square').click(function(e) {
        e.preventDefault();
        playerTurn += 1
        if (isOdd(playerTurn) == true) {
            $('#sq5').append("<img src='assets/x.png' height='180px' width='180px'>");
            board[1][1] = "X";
            checkWin(board, 1, 2);
        } else if (isOdd(playerTurn) == false) {
            $('#sq5').append("<img src='assets/o.png' height='180px' width='180px'>");
            board[1][1] = "O";
            checkWin(board, 1, 1);
        }
    })

    $('#sq6.square').click(function(e) {
        e.preventDefault();
        playerTurn += 1
        if (isOdd(playerTurn) == true) {
            $('#sq6').append("<img src='assets/x.png' height='180px' width='180px'>");
            board[1][2] = "X";
            checkWin(board, 1, 2);
        } else if (isOdd(playerTurn) == false) {
            $('#sq6').append("<img src='assets/o.png' height='180px' width='180px'>");
            board[1][2] = "O";
            checkWin(board, 1, 2);
        }
    })

    $('#sq7.square').click(function(e) {
        e.preventDefault();
        playerTurn += 1
        if (isOdd(playerTurn) == true) {
            $('#sq7').append("<img src='assets/x.png' height='180px' width='180px'>");
            board[2][0] = "X";
            checkWin(board, 2, 0);
        } else if (isOdd(playerTurn) == false) {
            $('#sq7').append("<img src='assets/o.png' height='180px' width='180px'>");
            board[2][0] = "O";
            checkWin(board, 2, 0);
        }
    })

    $('#sq8.square').click(function(e) {
        e.preventDefault();
        playerTurn += 1
        if (isOdd(playerTurn) == true) {
            $('#sq8').append("<img src='assets/x.png' height='180px' width='180px'>");
            board[2][1] = "X";
            checkWin(board, 2, 1);
        } else if (isOdd(playerTurn) == false) {
            $('#sq8').append("<img src='assets/o.png' height='180px' width='180px'>");
            board[2][1] = "O";
            checkWin(board, 2, 1);
        }
    })

    $('#sq9.square').click(function(e) {
        e.preventDefault();
        playerTurn += 1
        if (isOdd(playerTurn) == true) {
            $('#sq9').append("<img src='assets/x.png' height='180px' width='180px'>");
            board[2][2] = "X";
            checkWin(board, 2, 2);
        } else if (isOdd(playerTurn) == false) {
            $('#sq9').append("<img src='assets/o.png' height='180px' width='180px'>");
            board[2][2] = "O";
            checkWin(board, 2, 2);
        }
    })

});

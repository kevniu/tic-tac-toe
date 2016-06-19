$(document).ready(function() {
    var win = false
    var playerTurn = 1
    var col1Counter = 1
    var col2Counter = 1
    var col3Counter = 1
    var col4Counter = 1
    var col5Counter = 1
    var col6Counter = 1
    var col7Counter = 1

    var board = [
        ["0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0"]
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
                alert("Red Wins!")
                location.reload();
            } else if (win == true && isOdd(playerTurn) == true) {
                alert("Black Wins!")
                location.reload();
            }
        }
    }

    function horizontalCheck(board, rowNum) {
        var row = board[rowNum]
        var rowContent = row.join('')
        if (rowContent.includes("RRRR") == true) {
            win = true
            alert("Red Wins!")
            location.reload();
        } else if (rowContent.includes("BBBB") == true) {
            win = true
            alert("Black Wins!")
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
        if (diagonalContent.includes("RRRR") == true) {
            win = true
            alert("Red Wins!")
            location.reload();
        } else if (diagonalContent.includes("BBBB") == true) {
            win = true
            alert("Black Wins!")
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
        if (invDiagonalContent.includes("RRRR") == true) {
            win = true
            alert("Red Wins!")
            location.reload();
        } else if (invDiagonalContent.includes("BBBB") == true) {
            win = true
            alert("Black Wins!")
            location.reload();
        }
    }

    function checkWin(board, col, row){
      horizontalCheck(board, row)
      diagonalCheck(board, col, row)
      invDiagonalCheck(board, col, row)
      verticalCheck(board, col, row)
    }

    $('#col1.space').click(function(e) {
        e.preventDefault();
        playerTurn += 1
        if (isOdd(playerTurn) == true) {
            $('#row' + col1Counter + ' #col1').addClass('black');
            col1Counter += 1
            board[(col1Counter - 2)][0] = "B"
            checkWin(board, 0, (col1Counter - 2))
        } else if (isOdd(playerTurn) == false) {
            $('#row' + col1Counter + ' #col1').addClass('red');
            col1Counter += 1
            board[(col1Counter - 2)][0] = "R"
            checkWin(board, 0, (col1Counter - 2))
        }
    })

    $('#col2.space').click(function(e) {
        e.preventDefault();
        playerTurn += 1
        if (isOdd(playerTurn) == true) {
            $('#row' + col2Counter + ' #col2').addClass('black');
            col2Counter += 1
            board[(col2Counter - 2)][1] = "B"
            checkWin(board, 1, (col2Counter - 2))
        } else if (isOdd(playerTurn) == false) {
            $('#row' + column2_counter + ' #col2').addClass('red');
            col2Counter += 1
            board[(col2Counter - 2)][1] = "R"
            checkWin(board, 1, (col2Counter - 2))
        }
    })

    $('#col3.space').click(function(e) {
        e.preventDefault();
        playerTurn += 1
        if (isOdd(playerTurn) == true) {
            $('#row' + col3Counter + ' #col3').addClass('black');
            col3Counter += 1
            board[(col3Counter - 2)][2] = "B"
            checkWin(board, 2, (col3Counter - 2))
        } else if (isOdd(playerTurn) == false) {
            $('#row' + col3Counter + ' #col3').addClass('red');
            col3Counter += 1
            board[(col3Counter - 2)][2] = "R"
            checkWin(board, 2, (col3Counter - 2))
        }
    })

    $('#col4.space').click(function(e) {
        e.preventDefault();
        playerTurn += 1
        if (isOdd(playerTurn) == true) {
            $('#row' + col4Counter + ' #col4').addClass('black');
            col4Counter += 1
            board[(col4Counter - 2)][3] = "B"
            checkWin(board, 3, (col4Counter - 2))
        } else if (isOdd(playerTurn) == false) {
            $('#row' + col4Counter + ' #col4').addClass('red');
            col4Counter += 1
            board[(col4Counter - 2)][3] = "R"
            checkWin(board, 3, (col4Counter - 2))
        }
    })

    $('#col5.space').click(function(e) {
        e.preventDefault();
        playerTurn += 1
        if (isOdd(playerTurn) == true) {
            $('#row' + col5Counter + ' #col5').addClass('black');
            col5Counter += 1
            board[(col5Counter - 2)][4] = "B"
            checkWin(board, 4, (col5Counter - 2))
        } else if (isOdd(playerTurn) == false) {
            $('#row' + col5Counter + ' #col5').addClass('red');
            col5Counter += 1
            board[(col5Counter - 2)][4] = "R"
            checkWin(board, 4, (col5Counter - 2))
        }
    })

    $('#col6.space').click(function(e) {
        e.preventDefault();
        playerTurn += 1
        if (isOdd(playerTurn) == true) {
            $('#row' + col6Counter + ' #col6').addClass('black');
            col6Counter += 1
            board[(col6Counter - 2)][5] = "B"
            checkWin(board, 5, (col6Counter - 2))
        } else if (isOdd(playerTurn) == false) {
            $('#row' + col6Counter + ' #col6').addClass('red');
            col6Counter += 1
            board[(col6Counter - 2)][5] = "R"
            checkWin(board, 5, (col6Counter - 2))
        }
    })

    $('#col7.space').click(function(e) {
        e.preventDefault();
        playerTurn += 1
        if (isOdd(playerTurn) == true) {
            $('#row' + col7Counter + ' #col7').addClass('black');
            col7Counter += 1
            board[(col7Counter - 2)][6] = "B"
            checkWin(board, 6, (col7Counter - 2))
        } else if (isOdd(playerTurn) == false) {
            $('#row' + col7Counter + ' #col7').addClass('red');
            col7Counter += 1
            board[(col7Counter - 2)][6] = "R"
            checkWin(board, 6, (col7Counter - 2))
        }
    })
});

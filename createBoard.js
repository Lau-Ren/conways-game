function createBoard(size) {
  var board = Array(size)

  for(var i = 0; i <= size - 1; i++) {
    board[i] = new Array(size)
  }
  return board
}

module.exports = createBoard


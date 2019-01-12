/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = new Board({n: n});
  var rowIndex = 0;
  var columnIndex = 0;
  //togglepiece func takes in row and col
  while (rowIndex < n){
    solution.togglePiece(rowIndex, columnIndex);
    rowIndex++;
    columnIndex++;
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  //make solutionCount equal to 0
  //make new Board
  var newBoard = new Board({n: n});
      //note: colIndex = n = times we have to recurse thorugh tree
  var rookToggler = function(rowIndex){
    if (rowIndex === n){
      solutionCount++;
      return;
    } else if (rowIndex < n){
        for (let colIndex = 0; colIndex < n; colIndex++) {
          newBoard.togglePiece(rowIndex, colIndex);
          if (newBoard.hasAnyRooksConflicts() === false){
            rookToggler(rowIndex + 1);
          }
          newBoard.togglePiece(rowIndex, colIndex);
        }
    }
  }
    rookToggler(0);
    console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
    return solutionCount;
  };


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  // var solution = undefined; //this equals []
  debugger;
  var newBoard = new Board({n:n});
  if (n === 0){
    return newBoard.rows();
  }
  if (n === 2 || n === 3 ) { return newBoard.rows(); }

  var toggleCount = 0;

  for (var rowIndex = 0; rowIndex < n; rowIndex++){
    for (var colIndex = 0; colIndex < n; colIndex++){
      if (toggleCount === n){
        console.log('Single solution for ' + n + ' queens:', JSON.stringify(newBoard.rows()));
          return newBoard.rows();
      }
        newBoard.togglePiece(rowIndex, colIndex);
        if (newBoard.hasAnyQueensConflicts() === false){
          toggleCount++;
        } else if (newBoard.hasAnyQueensConflicts() === true){
          newBoard.togglePiece(rowIndex, colIndex);
        }
      }
  }

  // return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};



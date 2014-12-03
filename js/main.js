;(function(){
  'use strict';
 var gameRef = new Firebase('https://sondatictactoe.firebaseio.com/');

  var matrix = [["","","",],["","",""],["","",""]];
  var turnCounter = 0;
  gameRef.set({matrix: matrix, turnCounter: turnCounter})
  // ----- CREATE THE BOARD ----//

makeBoard(matrix)
function makeBoard(matrix){
  matrix.forEach(creatingRows);
    function creatingRows(rowValue){
      var $table = document.querySelector('#tictable');
      var $tr = document.createElement('tr');
      $table.appendChild($tr);
      rowValue.forEach(function(cellValue) {
      var $td = document.createElement('td');
      $($td).text(cellValue);
      $tr.appendChild($td);
    });
  }
};

  gameRef.on('value', function(snapshot) {
      var firebase = snapshot.val();
      matrix = firebase.matrix;
      turnCounter = firebase.turnCounter;
      redrawTable(matrix);
      console.log(matrix);
    });

  // --Add Symbols to DOM and Update Matrix--//

  $('td').click(function(){
    var vertical = Math.floor($("td").index(this)/3);
    var horizontal = $(this).index();
    if (turnCounter % 2 === 0){
      var x = $(this).text("X");
      matrix[vertical][horizontal] = "X";
    } else{
      $(this).text("O");
      matrix[vertical][horizontal] = "O";
    }
    turnCounter++;
    checkHorizontal(matrix);
    checkVertical(matrix);
    checkDiagonalFromLeft(matrix);
    checkDiagonalFromRight(matrix);
    gameRef.set({matrix: matrix, turnCounter: turnCounter});
    redrawTable(matrix);
  });

  function redrawTable(matrix){
    $('#tictable tr').each(function(i, row){
      $(row).find('td').each(function(j, cell){
        $(cell).text(matrix[i][j]);
      });
    });
  };




  function checkHorizontal(matrix) {
    for(var i = 0; i < 3; i++){
      if(matrix[i][0] === matrix[i][1] && matrix[i][0] === matrix[i][2]) {
        if(matrix[i][0] === "X"){
          alert("Player X wins!");
        } else if (matrix[i][0] === "O") {
          alert("Player O wins!");
        }
      }
    }
  }

  function checkVertical(matrix) {
    for(var i = 0; i < 3; i++){
      if(matrix[0][i] === matrix[1][i] && matrix[0][i] === matrix[2][i]) {
        if(matrix[0][i] === "X"){
          alert("Player X wins!");
        } else if (matrix[0][i] === "O") {
          alert("Player O wins!");
        }
      }
    }
  }

  function checkDiagonalFromLeft(matrix){
    if(matrix[0][0] === matrix[1][1] && matrix[0][0] === matrix[2][2]) {
      if(matrix[0][0] === "X"){
        alert("Player X wins!");
      } else if (matrix[0][0] === "O") {
        alert("Player O wins!");
      }
    }
  }

  function checkDiagonalFromRight(matrix){
    if(matrix[0][2] === matrix[1][1] && matrix[0][2] === matrix[2][0]) {
      if(matrix[0][2] === "X"){
        alert("Player X wins!");
      } else if (matrix[0][2] === "O") {
        alert("Player O wins!");
      }
    }
  }



}())

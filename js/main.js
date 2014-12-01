;(function(){
  'use strict';
  var matrix = [[0,0,0,], [0,0,0],[0,0,0]]

// ----- CREATE THE BOARD -----
matrix.forEach(creatingRows);
  function creatingRows(rowValue){
    var $table = document.querySelector('#tictable');
    var $tr = document.createElement('tr');
    $table.appendChild($tr);
    rowValue.forEach(function(cellValue) {
    var $td = document.createElement('td');
    $tr.appendChild($td);
  });
}

var count = 0;
$("td").each(function() {
  var $thisCell = $(this);
  var count = 0;
  $thisCell.click(function() {
    $thisCell.removeClass("unoccupied");
    $thisCell.removeClass("xselected");
    $thisCell.removeClass("oselected");
    count++;
    $thisCell.toggleClass( "xselected", count % 2 === 0 );
    $thisCell.toggleClass( "oselected", count % 3 === 0 );
  });
});


}())

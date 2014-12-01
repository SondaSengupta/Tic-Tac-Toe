;(function(){
  'use strict';
var count = 0;
$( "td" ).each(function() {
  var $thisCell = $(this);
  var count = 0;
  $thisCell.click(function() {
    $thisCell.removeClass("unoccupied xselected oselected");
    count++;
    $thisCell.toggleClass( "xselected", count % 2 === 0 );
    $thisCell.toggleClass( "oselected", count % 3 === 0 );
  });
});


}())

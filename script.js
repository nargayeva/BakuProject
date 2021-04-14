
$( document ).ready(function() {
$('#books').waypoint(function() {
    increment('books', 1000000);
  }, {offset: '75%'});
  
  $('#sentences').waypoint(function() {
    increment('sentences', 6256759);
  }, {offset: '75%'});
  
  $('#categories').waypoint(function() {
    increment('categories', 20);
  }, {offset: '75%'});
  
  $('#words').waypoint(function() {
    increment('words', 77994547);
  }, {offset: '100%'});
  
  $('#unique-words').waypoint(function() {
    increment('unique-words', 3500191);
  }, {offset: '100%'});

  function increment(elem, finalVal) {
    // alert('in the function');
    var currVal = parseInt(document.getElementById(elem).innerHTML, 10);
    if (currVal < finalVal) {
      finalVal > 100000 ? currVal = currVal + 50000 : currVal++;
    document.getElementById(elem).innerHTML = currVal;
  
      setTimeout(function() {
        increment(elem, finalVal);
      }, 20)
    }
  };
});
$(document).ready(function(){

  var numOfButtons = 9;
  var firstClick;
  var secondClick;

  function clickCounterChange() {
    clickCounter *= -1;
  };

  function addNumbers(a, b) {
    var c = a + b;
    console.log(a + " + " + b + " = " + c);
    return a + " + " + b + " = " + c;
  };

  for (var i = 0; i <= numOfButtons; i++) {
    $("#buttons").append("<button id=\"" + i + "\">" + i + "</button>");
  }

  var clickCounter = 1;

  $("#buttons").on("click", "button", function() {
    var tempButtonClick = parseInt($(this).attr("id"));
    if (clickCounter > 0) {
      firstClick = tempButtonClick;
      console.log("firstClick = " + firstClick);
      clickCounterChange();
    } else {
      secondClick = tempButtonClick;
      console.log("secondClick = " + secondClick);
      clickCounterChange();
      $("#answer").empty();
      $("#answer").append(addNumbers(firstClick, secondClick));
    }
  });


})

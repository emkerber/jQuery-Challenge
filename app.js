$(document).ready(function(){ //to initialize jQuery

  var numOfButtons = 9; //set the number on the highest-value button
  var firstClick; //initialize the variable so it's global
  var secondClick; //initialize the variable so it's global
  var clickCounter = 1; //this variable will check to see if the firstClick or the secondClick variable should store the value represented by the button clicked

  function clickCounterChange() { //changes the variable clickCounter between positive and negative
    clickCounter *= -1;
  };

  function addNumbers(a, b) { //the function that does the addition and concatenates the values into a string
    var c = a + b;
    console.log(a + " + " + b + " = " + c);
    return a + " + " + b + " = " + c;
  };

  for (var i = 0; i <= numOfButtons; i++) { //takes in the numOfButtons variable and appends the corresponding number of buttons to the DOM, while assigning each an ID that matches its value
    $("#buttons").append("<button id=\"" + i + "\">" + i + "</button>");
  }

  $("#buttons").on("click", "button", function() { //click event
    var tempButtonClick = parseInt($(this).attr("id")); //store the ID of the button clicked as a number
    if (clickCounter > 0) { //if the clickCounter variable is positive, the value is assigned to the variable firstClick
      firstClick = tempButtonClick;
      console.log("firstClick = " + firstClick);
      clickCounterChange(); //make the clickCounter value negative
    } else {
      secondClick = tempButtonClick; //otherwise the clickCounter variable is negative and the value is assigned to the secondClick varibale
      console.log("secondClick = " + secondClick);
      clickCounterChange(); //make the clickCounter variable positive
      $("#answer").empty(); //remove the answer text from the DOM after secondClick is assigned a (new) value
      $("#answer").append(addNumbers(firstClick, secondClick)); //append a string to the DOM with the first and second buttons's values and sum
    }
  });

})

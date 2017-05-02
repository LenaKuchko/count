var maxNumber, multipleNumber

var result = [];
var counting = function(maximum, minimum) {
  for (var i = 0; i <= maximum; i+=minimum) {
    result.push(i);
  };
};






$(function ()  {
  $("#formOne").submit(function(event) {
    maxNumber = parseInt($("input#numberOne").val());
    multipleNumber = parseInt($("input#numberTwo").val());


    if ((!maxNumber)||(!multipleNumber)) {
      alert("Enter a number");
    } else if ((maxNumber < 0)||(multipleNumber < 0)) {
      alert("We need a positive number");
    } else if (maxNumber < multipleNumber) {
      alert("The second number cannot be bigger than the first.")
    } else {
      counting(maxNumber, multipleNumber);
    };

    event.preventDefault();
    console.log(result);
  });
});

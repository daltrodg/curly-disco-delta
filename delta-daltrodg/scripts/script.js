$(document).ready(function () {
  console.log("doc is ready");
    //click functionality
  $("#clickMeBtn").click(function () {
    //creating variable
    var userName = $("#fname").val();
    
    //test logging
    console.log("user name = ", userName);
    console.log("you clicked the button");
    
      //calling defined function
    $("#factsOutput").html(getSpiritAnimal(userName));

  });
});
 

function getSpiritAnimal(x) {

  if (x.length == 0) {
    
    return "Please enter your name."
  } else if (x.length == 3) {
    return "You are a dog!";
  } else if (x.length == 4) {
    return "You are a fish!";
  } else if (x.length == 5) {
    return "You are a camel!";
  } else if (x.length == 6) {
    return "You are a jaguar!";
  } else if (x.length == 7) {
    return "You are a raccoon!";
  } else if (x.length == 8) {
    return "You are a kangaroo!";
  } else if (x.length == 9) {
    return "You are an alligator!";
  } else if (x.length == 10) {
    return "You are a rhinoceros!";
  } else {
    return "Your name is too long for me. Do you have a nickname?"
  }
    
}
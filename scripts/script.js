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

    //calling string manipulation functions.
    $("#stringManip1").html(nameLength(userName));
    $("#stringManip2").html(lowerCase(userName));

    $("#stringManip3").html(upperCase(userName));

    //Test log
    console.log(nameLength(userName));
    console.log(upperCase(userName));
  });
});

function getSpiritAnimal(x) {
  if (x.length == 0) {
    return "Please enter your name.";
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
    return "Your name is too long for me. Do you have a nickname?";
  }
}

const nameLength = (x) => {
  let result = "There are " + x.length + " letters in your name.";
  return result;
};

const lowerCase = (x) => {
  let result = "Your name in lower case: " + x.toLowerCase();
  return result;
};

const upperCase = (x) => {
  let result = "Your name in upper case: " + x.toUpperCase();
  return result;
};
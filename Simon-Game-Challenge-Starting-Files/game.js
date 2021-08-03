// alert("Working!");
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

// Start the game when keyboard has been pressed.
$(document).on("keydown", function() {
  if (!started) {
    nextSequence();
    $("#level-title").text("Level " + level);
    started = true;
  }
});

// Check which button is pressed by user
$(".btn").click(function() {
  // to store the id of the button that got clicked.
  // Use attr() function in jQuery to find out the value of any attribures of an object.
  var userChosenColor = $(this).attr('id');
  userClickedPattern.push(userChosenColor);
  checkAnswer(userClickedPattern.length-1);
  playSound(userChosenColor);
  animatePress(userChosenColor);
})

function nextSequence() {
  // Reset the userClickedPattern to empty array ready for the next level.
  userClickedPattern = [];
  var randomNumber = Math.random();
  randomNumber = randomNumber * 4; // [0 to 3.999]
  randomNumber = Math.floor(randomNumber);
  console.log("random num" + randomNumber);
  // return randomNumber;
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);

  level++;
  $("#level-title").text("Level " + level);
}

function playSound(name) {
  var audio = new Audio("sounds/"+ name + '.mp3');
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  // Remove pressed class after 100milliseconds
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

// Check user's answer against the game sequence
function checkAnswer(currentLevel) {
  userColor = userClickedPattern[currentLevel];
  gameColor = gamePattern[currentLevel];
  if (userColor == gameColor) {
    var success = true;
    console.log("Success");
    // Check if they have finished their sequence
    if (gamePattern.length == userClickedPattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");

    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    restart();
    console.log("wrong");
  }
}

function restart() {
  level = 0;
  gamePattern = [];
  started = false;
}

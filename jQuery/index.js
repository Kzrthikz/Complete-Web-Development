// jQuery("h1")
// or $("h1")

//Check if jQuery is ready. Wait until document/jquery library has finished loading & then access h1 to change.
// But best to include jquery at the very end.
// Use this when jquery is at the head.
// $(document).ready(function(){
//   $("h1").css("color", "red");
// })

// Changing color property of h1 to red
// 2 property --> Setting the value
// $("h1").css("color", "green");

// Single property -> Getting the value
// console.log($("h1").css("color"));
// console.log($("h1").css("font-size"));

//Need to maintain seperation of Concern tho. This is a much better way of seperating.
// $("h1").addClass("big-title margin-50");

// To remove:
// $("h1").removeClass("big-title");




// TEXT MANIPULATION
// Method 1
$("h1").text("Hi Karthika darling");

//Downside: affects every h1 element that match this button criteria
// $("button").text("Touch me instead");

//Method 2 innerHTML --> emphasises/italices Hey
// $("button").html("<em>Hey</em>");

//VS Ignores all the tags.
// $("button").text("<em>Hey</em>");




// ATTRIBUTE MANIPULATION : ORANGE IN HTML eg. href
// Getting:
console.log($("a").attr("href"));

// Setting:
$("a").attr("href", "https://facebook.com");




// ADDING EVENT LISTENERS WITH JQUERY
// $("h1").click(function() {
//   $("h1").css("color", "purple");
// })

// Had for loop to go through each button.
// Goes through all the buttons it finds without having to go through a for loop in vanilla js.
// $("button").click(function() {
//   $("h1").css("color", "green");
// })


//Detect for keystrokes in textbox. Adding keypress to the entire doc.
// $("input").keypress(function(event) {
//   console.log(event.key);
// })

// Want to show the event.key as h1 text.
// $("input").keypress(function(event) {
//   $("h1").text(event.key);
// })

// Detech mouseover on h1, change color to purple.
// $("h1").on("mouseover", function() {
//   $("h1").css("color", "purple");
// })



// WEBSITE ANIMATION W JQUERY
$("button").on("click", function() {
  $("h1").slideUp().slideDown().animate({opacity:0.5}); 
  // $("h1").animate({opacity: 0.5});
  // $("h1").slideToggle();
  // $("h1").slideUp();
  // $("h1").fadeToggle();
  // $("h1").fadeOut();
  // $("h1").toggle();
  // $("h1").hide();
})

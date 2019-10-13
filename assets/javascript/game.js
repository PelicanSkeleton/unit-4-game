//2. The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 

// 3. Here's how the app works:

//    * There will be four crystals displayed as buttons on the page.

//    * The player will be shown a random number at the start of the game.

//   * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

  //   * Your game will hide this amount until the player clicks a crystal.
    // * When they do click one, update the player's score counter.

  // * The player wins if their total score matches the random number from the beginning of the game.

  // * The player loses if their score goes above the random number.

  // * The game restarts whenever the player wins or loses.

   //  * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

  // * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

//##### Option 1 Game design notes

//* The random number shown at the start of the game should be between 19 - 120.

//* Each crystal should have a random hidden value between 1 - 12.
var crystal = {
    one:
    {
        name: "One",
        value: 0
    },
    two: 
    {
        name: "Two",
        value: 0
    },
    three:
    {
        name: "Three",
        value: 0
    },
    four:
    {
        name: "Four",
        value: 0
    }
};

var targetScore = 0;
var userScore = 0;

var winCount = 0;
var lossCount = 0;


function game (){
    userScore = 0;

    targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

    crystal.one.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    crystal.two.value = Math.floor(Math.random() * (12 -1 + 1)) + 1;
    crystal.three.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    crystal.four.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

    $("#target-score").html(targetScore);
    $("#user-score").html(userScore);

    
}

function crystalValue (crystal) {
    userScore += crystal.value;
    $("#user-score").html(userScore);

    if(userScore > targetScore) {
        lossCount++;
        $("#losses").html(lossCount);
        alert("Better luck next time.");
        game();
    } else if (userScore == targetScore) {
        winCount++;
        $("#wins").html(winCount);
        alert("You won! Congratulations!");
        game();
    }

    
    
}

game();

var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "./assets/images/shooting-star.mp3");

$("#first-crystal").on("click", function(){
    crystalValue(crystal.one);
   
        audioElement.play();
});

$("#second-crystal").on("click", function(){
    crystalValue(crystal.two);

    audioElement.play();
});

$("#third-crystal").on("click", function(){
    crystalValue(crystal.three);

    audioElement.play();
});

$("#fourth-crystal").on("click", function(){
    crystalValue(crystal.four);

    audioElement.play();
});
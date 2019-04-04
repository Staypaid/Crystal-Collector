$( document ).ready(function() {

    //Setting all variables to 0 for beginning of game
    var targetNumber = 0;  
    var totalScore = 0;  
    var userWins = 0;
    var userLosses = 0;
    var sapphire = 0;
    var emerald = 0;
    var ruby = 0;
    var diamond = 0;
  
  
    //Function to start game
    var startGame = function(){
    


      //Sets the number to random
      targetNumber = Math.floor(Math.random() * (75) +1);
      $(".random").text("Target Number: " + targetNumber);
  
      //Set each crystal to a random number
      sapphire = Math.floor((Math.random() * 12) + 1);
      emerald = Math.floor((Math.random() * 12) + 1);
      ruby = Math.floor((Math.random() * 12) + 1);
      diamond = Math.floor((Math.random() * 12) + 1);
  
      //Setting user score back to 0 and displaying scoreboard to html
      totalScore = 0;
      $(".total-score").text(" " + totalScore);
      $(".wins").text(" " + userWins);
      $(".losses").text(" " + userLosses);
  
      //Logging random target number and crystal values
      console.log(sapphire);
      console.log(emerald);
      console.log(ruby);
      console.log(diamond);
      console.log(targetNumber);
      console.log("/n");
  
    };
  

    //Calling start game function
    startGame();
  
    //Setting the click functions for each crystal
    $(".sapphire").on("click", function() {
      totalScore = totalScore + sapphire;
      $(".total-score").text(" " + totalScore);
      match();
    });
  
    $(".emerald").on("click", function() {
      totalScore = totalScore + emerald;
      $(".total-score").text(" " + totalScore);
      match();
    });
  
    $(".ruby").on("click", function() {
      totalScore = totalScore + ruby;
      $(".total-score").text(" " + totalScore);
      match();
    });
  
    $(".diamond").on("click", function() {
      totalScore = totalScore + diamond;
      $(".total-score").text(" " + totalScore);
      match();
    });
      // Defining function to determine if the user wins/loses
      var match = function() {
          if (totalScore === targetNumber) {
            alert("Winner! Winner!");
            userWins = userWins + 1;
            $(".wins").text(userWins);
            startGame();
          }
  
          if (totalScore > targetNumber) {
            alert("YOU LOSE!");
            userLosses = userLosses + 1;
            $(".losses").text(userLosses);
            startGame();
          }
      };
  
  });
  
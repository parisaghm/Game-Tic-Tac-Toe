$(document).ready(function () {
  var playerY = [];
  var playerX = [];
  var win = ["012", "345", "678", "036", "147", "258", "048", "246"];
  var playturn = true;
  $("#turnInfox").addClass('active');
  var wintrue;

  function cheakWinner(finalwinner,winner){
    switch (wintrue){
      case"012":
      console.log(wintrue);
      console.log(winner);
      alert('winner');
      break;
      case"345":
      console.log(wintrue);
      console.log(winner)
      alert('winner');
      break;
      case"678":
      console.log(wintrue);
      console.log(winner)
      alert('winner');
      break;
      case"036":
      console.log(wintrue);
      console.log(winner);
      alert('winner');
      break;
      case"147":
      console.log(wintrue);
      console.log(winner);
      alert('winner');
      break;
      case"258":
      console.log(wintrue);
      console.log(winner)
      break;
      case"048":
      console.log(wintrue);
      console.log(winner)
      break;
      case"246":
      console.log(wintrue);
      console.log(winner)
      break;
    }    
  }
var finishGame = false;
    $(".game-tic").click(function () {
      if(finishGame == false){
        if ($(this).text() == '') {
          if (playturn) {
            $('#turnInfox').removeClass('active');
            $('#turnInfoy').addClass('active');
            $(this).text("X").show();
            var dataindex = $(this).attr("data-index");
            playerX.push(dataindex);
            playerX.sort();
            console.log(playerX.sort())
            var joinpositionx = playerX.join('');
            // var winincludesx = win.includes(joinpositionx);
            for(var i = 0;i<= win.length;i++){
              var winincludesx = joinpositionx.includes(win[i]);
              if(winincludesx){
                wintrue= win[i];
                finishGame = true;
              }
            }
            cheakWinner(winincludesx , 'X');
            playturn = false;
          } else {
            $('#turnInfoy').removeClass('active');
            $('#turnInfox').addClass('active');
            $(this).text("Y").show();
            var dataindex = $(this).attr("data-index");
            playerY.push(dataindex);
            playerY.sort();
            var joinpositiony = playerY.join('');
            // var winincludesy = win.includes(joinpositiony);
            for(var i = 0 ; i<=win.length ; i++){
              var winincludesy = joinpositiony.includes(win[i]);
              if(winincludesy){
                wintrue = win[i];
                finishGame = true;
              } 
            }
            cheakWinner(winincludesy , 'Y');
            playturn = true;
          }
        }
      }
    });

});
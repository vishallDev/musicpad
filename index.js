$(document).ready(function() {

  var padOne = new Audio('./tones/t1.mp3');
  $('.pad-1').mousedown(function() {
    padOne.load()
    padOne.play();
  });

  var padTwo = new Audio('./tones/t2.mp3');
  $('.pad-2').mousedown(function() {
    padTwo.load();
    padTwo.play();
  });

  var padThree = new Audio('./tones/t3.mp3');
  $('.pad-3').mousedown(function() {
    padThree.load();
    padThree.play();
  });

  var padFour = new Audio('./tones/t4.mp3');
  $('.pad-4').mousedown(function() {
    padFour.load();
    padFour.play();
  });

  var padFive = new Audio('./tones/t5.mp3');
  $('.pad-5').mousedown(function() {
    padFive.load();
    padFive.play();
  });

  var padSix = new Audio('./tones/t6.mp3');
  $('.pad-6').mousedown(function() {
    padSix.load();
    padSix.play();
  });

  var padSeven = new Audio('./tones/t7.mp3');
  $('.pad-7').mousedown(function() {
    padSeven.load();
    padSeven.play();
  });
  
  var padEight = new Audio('./tones/t8.mp3');
  $('.pad-8').mousedown(function() {
    padEight.load();
    padEight.play();
  });

  var padNine = new Audio('./tones/t9.mp3');
  $('.pad-9').mousedown(function() {
    padNine.load();
    padNine.play();
  });
  
  var padTen = new Audio('./tones/t10.mp3');
  $('.pad-10').mousedown(function() {
    padTen.load();
    padTen.play();
  });
  
  var padEleven = new Audio('./tones/t11.mp3');
  $('.pad-11').mousedown(function() {
    padEleven.load();
    padEleven.play();
  });
  
  var padTwelve = new Audio('./tones/t12.wav');
  $('.pad-12').mousedown(function() {
    padTwelve.load();
    padTwelve.play();
  });
  
  
  $(window).keydown(function(e) {
    var code = e.keyCode;
    var kc = String.fromCharCode(e.keyCode);
    $("div[data-code='"+code+"']").addClass("active")
    console.log(code);
    
    switch(kc) {
      case "Q":
        padOne.load();
        padOne.play();
        break;
      case "W":
        padTwo.load();
        padTwo.play();
        break;
      case "E":
        padThree.load();
        padThree.play();
        break;
      case "R":
        padFour.load();
        padFour.play();
        break;
      case "U":
        padFive.load();
        padFive.play();
        break;
      case "I":
        padSix.load();
        padSix.play();
        break;
      case "O":
        padSeven.load();
        padSeven.play();
        break;
      case "P":
        padEight.load();
        padEight.play();
        break;
      case "T":
        padNine.load();
        padNine.play();
        break;
      case "Y":
        padTen.load();
        padTen.play();
        break;
      case "G":
        padEleven.load();
        padEleven.play();
        break;
      case "H":
        padTwelve.load();
        padTwelve.play();
        break;
      default:
    }
  });

  $(window).keyup(function(e) { 
    var code = e.keyCode;
    $("div[data-code='"+code+"']").removeClass("active");
  });

});
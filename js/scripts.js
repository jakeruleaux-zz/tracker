$(document).ready(function() {
  $("#form-one").submit(function() {
    var question1 = parseInt($("#question1"))val();
    var question2 = parseInt($("#question2"))val();
    var question3 = parseInt($("#question3"))val();
    var question4 = parseInt($("#question4"))val();
    var question5 = parseInt($("#question5"))val();
    var question6 = parseInt($("#question6"))val();
    var question7 = parseInt($("#question7"))val();
    var question8 = parseInt($("#question8"))val();

  function add() {
    var total = question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8;
  }

    if (total >= 27) {
      $("#java").show();
    } else if (total >=22 ); {
      $("#c-sharp").show(); {
    }  else if (total >= 13); {
      $("#ruby").show(); {
    } else {
      $("#php").show();
    }

});

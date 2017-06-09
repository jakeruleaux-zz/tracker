$(document).ready(function() {
  $("#form-one").submit(function(event) {
    event.preventDefault();
      var q1 = parseInt($("#question1").val());
      var q2 = parseInt($("#question2").val());
      var q3 = parseInt($("#question3").val());
      var q4 = parseInt($("#question4").val());
      var q5 = parseInt($("#question5").val());
      var q6 = parseInt($("#question6").val());
      var q7 = parseInt($("#question7").val());
      var q8 = parseInt($("#question8").val());
      var total = q1 + q2 + q3+ q4 + q5 + q6 + q7 + q8;
// console.log(total);
      if ((total >= 8) && (total <=12 )) {
        $("#php").show();
        $("#ruby").hide();
        $("#c-sharp").hide();
        $("#java").hide();
      } else if ((total >= 13) && (total <= 18)) {
        $("#ruby").show();
        $("#c-sharp").hide();
        $("#java").hide();
        $("#php").hide();
      } else if ((total >= 19) && (total <= 26)) {
        $("#c-sharp").show();
        $("#java").hide();
        $("#php").hide();
        $("#ruby").hide();
      } else
        $("#java").show();  
        $("#ruby").hide();
        $("#php").hide();
        $("#c-sharp").hide();
  });
 });

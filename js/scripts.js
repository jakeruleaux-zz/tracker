$(document).ready(function() {
  var q1 = parseInt($("#question1").val());
  var q2 = parseInt($("#question2").val());
  var q3 = parseInt($("#question3").val());
  var q4 = parseInt($("#question4").val());
  var q5 = parseInt($("#question5").val());
  var q6 = parseInt($("#question6").val());
  var q7 = parseInt($("#question7").val());
  var q8 = parseInt($("#question8").val());
  var total = q1 + q2 + q3+ q4 + q5 + q6 + q7 + q8;
}

  if (total >= 8) {
    $("#php").show();
  } else if (total >= 16) {
    $("#ruby").show();
  } else if (total >= 24) {
    $("#c-sharp").show();
  } else (total >= 32) {
    $("#java").show();
  }
$("#form-one").submit(function() {

});









//  $('select').change(function(){
//      var sum = 0;
//      $('select :selected').each(function() {
//          sum += Number($(this).val());
//      });
//       $("#sum").html(sum);







//$(".form-control option:selected").val();

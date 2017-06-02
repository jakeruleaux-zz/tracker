$(document).ready(function() {
  $("#form-one").submit(function() {

$(function() {
  $("#form-one option[value="${form-oneValue}"]").prop("selected", true);
});

    if (total >= 27) {
      $("#java").show();
    } else if (total >=22 ) {
      $("#c-sharp").show();
    } else if (total >= 13) {
      $("#ruby").show();
    } else {
      $("#php").show();
    }

});

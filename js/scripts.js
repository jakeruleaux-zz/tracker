$(document).ready(function() {
  $("#form-one").submit(function() {
  });
console.log(selected);
  (function() {
    var $total = $('#usertotal');
    $('select').change(function () {
        var tot = 0;
        $('select > option:selected').each(function () {
            var selects = $(this).attr('value');
            if (selects) {
                tot += Number(selects);
            }
  });
  if (total === 8) {
    $("#php").show();
  }

});

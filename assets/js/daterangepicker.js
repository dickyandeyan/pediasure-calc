$(function () {
   $('input[name="daterange"]').daterangepicker({
      opens: 'right',
      "showDropdowns": true,
    }, function(start, end, label) {
    });
});
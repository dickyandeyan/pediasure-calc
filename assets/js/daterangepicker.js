$(function () {
   $('input[name="daterange"]').daterangepicker({
      opens: 'right',
      "showDropdowns": true,
      "buttonClasses" : 'btn',
      "applyButtonClasses": 'btnDate',
      "cancelButtonClasses": 'btnCancel'
    }, function(start, end, label) {
    });
});
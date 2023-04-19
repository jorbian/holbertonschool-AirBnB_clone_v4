<<<<<<< HEAD
$( document ).ready(function () {

  /*****************************************************
    display list of checkboxes clicked
   *****************************************************/
  let ls_amen = [];
  $('input[type=checkbox]').change (function () {
    let name = $(this).attr('data-name');
      if ($(this).is(':checked')) {
	ls_amen.push(name);
      } else {
	ls_amen = ls_amen.filter(amen => amen !== name);
      }
    $('.amenities h4').text(ls_amen.join(', '));
  });

  /*******************************************************
    display red circle on top right of page if status ok
   *******************************************************/
  $.ajax({
    type: 'GET',
    url: 'http://0.0.0.0:5001/api/v1/status/',
    dataType: 'json',
    success: function (data) {
      if (data.status === 'OK') {
	$('#api_status').addClass('available');
      } else {
	$('#api_status').removeClass('available');
      }
    }
  });

=======
$(document).ready(function () {
  const amenities = {};
  $.get('http://0.0.0.0:5001/api/v1/status/', (returnData) => {
    // console.log(returnData);
    if (returnData.status === 'OK') {
      $('#api_status').attr('class', 'available');
    }
  });

  $('input:checkbox').click(function () {
    $(this).each(function () {
      if (this.checked) {
        amenities[$(this).data('id')] = $(this).data('name');
      } else {
        delete amenities[$(this).data('id')];
      }
    });
    if (Object.values(amenities).length > 0) {
      $('.amenities h4').text(Object.values(amenities).join(', '));
    } else {
      $('.amenities h4').html('&nbsp');
    }
  });
>>>>>>> 8c872921e4dc6d3d56ae576ad00d04d81ec2fa2e
});

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

  /*******************************************************
    populate Places from frontend, instead of backend jinja
   *******************************************************/
    $.ajax({
      type: 'POST',
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      data: JSON.stringify({}),
      contentType: 'application/json',
      success: function (data) {
	for (let i = 0; i < data.length; i++) {
	  $('section.places').append('<article><div class="title"><h2>' + data[i].name + '</h2><div class="price_by_night">' + data[i].price_by_night + '</div></div><div class="information"><div class="max_guest"><i class="fa fa-users fa-3x" aria-hidden="true"></i><br />' + data[i].max_guest + ' Guests</div><div class="number_rooms"><i class="fa fa-bed fa-3x" aria-hidden="true"></i><br />' + data[i].number_rooms + ' Bedrooms</div><div class="number_bathrooms"><i class="fa fa-bath fa-3x" aria-hidden="true"></i><br />' + data[i].number_bathrooms + ' Bathroom</div></div><div class="description">' + data[i].description + '</div></article>');
	}
      }
    });

=======
function pluralize (string, num) {
  if (num === 1 || num === '1') { return string; } else { return `${string}s`; }
}

$(document).ready(function () {
  const amenities = {};
  $.get('http://0.0.0.0:5001/api/v1/status/', (returnData) => {
    // console.log(returnData);
    if (returnData.status === 'OK') {
      $('#api_status').attr('class', 'available');
    }
  });
  console.log('before');
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search',
    type: 'POST',
    data: '{}',
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
      console.log(data);
      // const i = '';
      for (const i in data) {
        const place = data[i];
        // console.log(`place is ${place.name}`)
        $('section.places').append(
              `
              <article>
              <div class="title_box">
                <h2>${place.name}</h2>
                <div class="price_by_night">$${place.price_by_night}</div>
              </div>
              <div class="information">
                <div class="max_guest">${place.max_guest} ${pluralize('Guest', place.max_guest)}</div>
                      <div class="number_rooms">${place.number_rooms} ${pluralize('Bedroom', place.number_rooms)}</div>
                      <div class="number_bathrooms">${place.number_bathrooms} ${pluralize('Bathroom', place.number_bathrooms)}</div>
              </div>
              <div class="user">
                    </div>
                    <div class="description">
                ${place.description}
                    </div>
            </article>
              `
        );
        console.log(place.name);
      }
    }
  });
  // let sendingData = {};
  // sendingData.name = "Raj";
  // sendingData.age  = 32;
  // sendingData.married = false;
  // sendingData = JSON.stringify(sendingData);

  // post(URL,data,function(data,status,xhr),dataType)
  // $.post('http://0.0.0.0:5001/api/v1/places_search/', sendingData, function(recvdData) {
  //   console.log(recvdData);
  // });
  console.log('okay');

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

$(document).ready(function() {
  $('input[type="checkbox"]').change(function() {
    const checkedAmenities = [];
    $('input[type="checkbox"]:checked').each(function() {
      const myId = $(this).data('id');
      checkedAmenities.push(myId);
    });

    const amenitiesList = checkedAmenities.join(', ');
    $('#amenities h4').text(amenitiesList);
  });
  $.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
});

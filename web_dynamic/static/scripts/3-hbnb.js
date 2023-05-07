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
  
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({})
  }).done(function(data) {
    for (const place of data) {
      const article = $('<article></article>');
      const title = $('<div class="title"><h2>' + place.name + '</h2><div class="price_by_night">$' + place.price_by_night + '</div></div>');
      const info = $('<div class="information"><div class="max_guest">' + place.max_guest + ' Guests</div><div class="number_rooms">' + place.number_rooms + ' Bedrooms</div><div class="number_bathrooms">' + place.number_bathrooms + ' Bathroom</div></div>');
      const description = $('<div class="description">' + place.description + '</div>');
      article.append(title, info, description);
      $('section.place').append(article);
    }
  });
});

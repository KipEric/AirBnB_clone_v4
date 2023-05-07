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
});

/** THIS IS THE ANIMATION FOR THE LOGO */

$(document).ready(function() {

$(window).on('load', function() {
    $('#bounceBug').effect("bounce", {
        times: 4,
        distance: 200
    }, 400).click(function() {
        $(this).effect("bounce", {
            times: 4,
            distance: 200
        }, 400);
    });
  });
});

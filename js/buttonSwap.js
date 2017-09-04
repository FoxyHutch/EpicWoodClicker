$(document).ready(function() {
  var currButton = 0;

  /* Hides the current Button and displays next one */
  $('#next').on('click', function getNext() {
    switch (currButton) {
      case 0:
        $("#holz-btn").toggle();
        $("#stein-btn").toggle();
        currButton += 1;
        break;
      case 1:
        $("#stein-btn").toggle();
        $("#nahrung-btn").toggle();
        currButton += 1;
        break;
      case 2:
        $("#nahrung-btn").toggle();
        $("#gold-btn").toggle();
        currButton += 1;
        break;
      default:
        break;
    }
  });

  /* Hides current Button and displays previous one */
  $('#prev').on('click', function getPrev() {
    switch (currButton) {
      case 1:
        $("#stein-btn").toggle();
        $("#holz-btn").toggle();
        currButton -= 1;
        break;
      case 2:
        $("#nahrung-btn").toggle();
        $("#stein-btn").toggle();
        currButton -= 1;
        break;
      case 3:
        $("#gold-btn").toggle();
        $("#nahrung-btn").toggle();
        currButton -= 1;
        break;
      default:
        break;
    }
  });
});

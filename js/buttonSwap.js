$(document).ready(function() {
  var clickerImages = ["img/PixelHolzZwei.png", "img/PixelStein.png",
    "img/PixelNahrung.png", "img/PixelGold.png"
  ];
  var clickerIDs = ["holz-btn", "stein-btn", "nahrung-btn", "gold-btn"]
  var currButton = 0;

  $('#next').on('click', function functionName() {
      var clickerButton = $("div.clicker-container").children("input");
      if (currButton == 3) {
        currButton = 3;
      } else {
        currButton += 1;
      };
      clickerButton.attr("src", clickerImages[currButton] );
      clickerButton.attr("id", clickerIDs[currButton]);
  });
  $('#prev').on('click', getPrev(clickerImages,clickerIDs,  currButton));
});

function getNext(images, ids,  curr) {

};


function getPrev(images, ids,  curr) {

}

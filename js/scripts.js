//business logic
function Contact(first, last) {
  this.placeName = first;
  this.cityName = last;
}

function Description(link, season, review) {
  this.myLocation = "portland";
  this.myLink = link;
  this.season = season;
  this.review = review;
}

Contact.prototype.fullPlaceName = function() {
  return this.placeName + ", " + this.cityName;
}

Description.prototype.fullDescription = function() {
  return this.myLocation + ", " + this.myLink + ", " + this.season + ", " + this.review;
}

function resetFields() {
    $("input#new-place-name").val("");
    $("input#new-city-name").val("");
    $("input#new-location-name").val("");
    $("input#new-link-name").val("");
    $("input#new-season-name").val("");
    $("input#new-review-name").val("");
  }

// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

  var inputtedPlaceName = $("input#new-place-name").val();
  var inputtedCityName = $("input#new-city-name").val();
  var newPlace = new Contact(inputtedPlaceName, inputtedCityName);

  var inputtedAddress = $("input#new-location-name").val();
  var inputtedLink = $("input#new-link-name").val();
  var inputtedSeason = $("input#new-season-name").val();
  var inputtedReview = $("input#new-review-name").val();
  var newDescription = new Description(inputtedLink, inputtedSeason, inputtedReview);

    $("ul#places").append("<li><span class='contact'>" + newPlace.fullPlaceName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-places").show();
      $("#show-places h2").text(newPlace.fullPlaceName());
      $(".place-name").text(newPlace.placeName);
      $(".city-name").text(newPlace.cityName);
      $("ul#descriptions").text("");
      $("ul#descriptions").append("<li>" + newDescription.fullDescription() + "</li>");
    });

    resetFields();

  });
});

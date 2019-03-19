var topics = ["marge simpson", "bart simpson", "homer simpson", "lisa simpson", "ned flanders", "mr. burns"];
var favorites = []; 
var divButtons = $("<div>")
  .addClass("col-md-12")
  .attr("id", "button");
$("body").append(divButtons);

function makeButtons() {

  $("#button").empty();

  for (var i = 0; i < topics.length; i++) {

    var catButtons = $("<button>")
    catButtons
      .attr("id", "catButton")
      .attr("data-cat", topics[i])
      .addClass("cats btn btn-primary m-2")
      .text(topics[i]);
    $("#button").append(catButtons);
  }
} makeButtons();
var divRow = $("<div>")
    divRow 
      .addClass("row")
    $("body").append(divRow)

var divContainer = $("<div>")
    divContainer  
      .addClass("col-md-12")
    $(divRow).append(divContainer)

var divForm = $("<form>")
  .attr("id", "form")
  .addClass("card float-right p-3 m-3")
  .append('<label for="stuff-input">Add another simpsons character!</label>')
  .append('<input type="text" id="form-input"><br>')
  .append('<input class="btn btn-primary m-2" id="add-stuff" type="submit" value="more cats!">')
  $(divContainer).append(divForm)

$("#add-stuff").on("click", function (event) {
  event.preventDefault();
  var newCat = $("#form-input").val().trim();
  topics.push(newCat);
  makeButtons()

});

$(document).on("click", "#catButton", function (event) {
  event.preventDefault();

  var apiKey = "HxwynQp8ob7R6ae0v86N9VgR8hhNS0DE";
  var cat = $(this).attr("data-cat");
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + cat + "&api_key=" + apiKey + "&limit=10"

  alert(cat);

  $.ajax({
    url: queryURL,
    method: "GET"

  }).then(function (response) {

    var results = response.data
    console.log(results);

    function images() {
      for (var j = 0; j < results.length; j++) {

        var gifDiv = $("<div>");
            gifDiv 
              .addClass("col-md-9")
              $(divContainer).append(gifDiv);
        var gifCard = $("<div>")
              .addClass("float-left m-1")
        var rating = results[j].rating;
        var p = $("<p>").text("Rating: " + rating);
        var topicImage = $("<img>");
            topicImage
              .attr("data-state", "still")
              .attr("data-still", results[j].images.fixed_height_still.url)
              .attr("data-animate", results[j].images.fixed_height.url)
              .attr("src", results[j].images.fixed_height_still.url)
              .addClass("img-responsive")
              .addClass("gif");
        gifCard.append(p);
        gifCard.append(topicImage);
        $(gifDiv).prepend(gifCard);
        console.log(p)
        var downloadButton = $("<button>")
            downloadButton
              .attr("id", "dwnBtn")
              .attr("href", results[j].images.original.url)
              .text("download!")
        p.append(downloadButton)

        // jQuery(document).ready(function($) {

       $('downloadButton[href$=".gif"]')
          .attr('download', '')
          .attr('target', '_blank'); 
        // });
      } 

    } images(results)

        $(".gif").on("click", function (event) {

          var state = $(this).attr("data-state");

          console.log(state);
          if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }
        });
  });

});

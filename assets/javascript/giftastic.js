var cats = ["Monty", "Honey Bee", "Venus", "Lil Bub", "Maru", "Grumpy cat", "Garfi", "Shironeko", "Snoopy", "Colonel Meow"];

function alertCat () {
    var catName = $(this).attr("data-cat");
    console.log(catName);
}

function renderButtons () {

    $("#buttons").empty();

    for (var i = 0; i < cats.length; i++) {
    var catButtons = $("<button>")
        catButtons 
            .text(cats[i])
            .addClass("cat")
            .attr("id", "catButton")
            .attr("data-cat", cats[i]);
            $("#buttons").append(catButtons);
    }
} 

$("#add-cat").on("click", function(event) {
        event.preventDefault();

        var newCat = $("#cat-input").val();
        cats.push(newCat);
        renderButtons()
        console.log(newCat);
        console.log(cats)
       
});

$(document).on("click", ".cat", alertCat);
// Calling the renderButtons function to display the intial buttons
renderButtons();

console.log(cats);
//     var apiKey = "HxwynQp8ob7R6ae0v86N9VgR8hhNS0DE"
//     var cat = $(this).attr("data-cat");
//     var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + cat + "&api_key=" + apiKey +"&limit=5"

//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function(response) {
//       $("body").append("img", "src=" + response.images.fixed_height_still.url);
//       console.log(response.images.fixed_height_still.url)
//     });
  
// }); 



//apikey 

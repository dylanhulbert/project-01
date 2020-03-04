// javascript

// var for the parks
// var parks = {
//     crla : {
//         name: "crater lake",
//         zip: "97604",
//     },
//     iafl : {
//         name: "ice age floods",
//         zip: "99116",
//     },
//     joda : {
//         name: "john day fossil beds",
//         zip: "97848",
//     },
//     lewi : {
//         name: "lewis and clark",
//         zip: "97103",
//     },
//     crla : {
//         name: "nez perce",
//         zip: "83540",
//     }
// };    

// depending on park selected, by index, append to weather request

// select date for weather request

// append date and location (park) to weather request



// js function for changing background image
$(document).ready(function () {
    var value;
    $('#ParkDropDown').on('change', function () {
        value = $(this).val();
        var APIKey = "kBIqlaM6bq5UyDKlkxwMUvMo6EAuPevne8z94XHM";
        var queryURL = "https://developer.nps.gov/api/v1/parks?parkCode=" + value + "&api_key=" + APIKey;


        $.ajax({
            url: queryURL,
            method: "GET"

        })
            .then(function (response) {
            
            
                $(".parkDirections").text("Directions: " + response.data[0].directionsInfo);
                $(".parkHours").text("Hours of Operation: " + response.data[0].operatingHours[0].description);

            


            });

        // $('.pusher').css({'background-image':'url(' + [value] + ')'}, {'background-size': 'cover'});
        // }

    });
}); 

//js function for onClick event of button

// $('#buttonSelector').click(function(){

// })

// var APIKey = "kBIqlaM6bq5UyDKlkxwMUvMo6EAuPevne8z94XHM"; 


// var queryURL = "https://developer.nps.gov/api/v1/parks?parkCode=" + value + "&api_key=" + APIKey; 
// console.log(parkCode)

//     $.ajax({
//         url: queryURL,
//         method: "GET"

//     })
//     .then(function(response) {
//         $(".crlaDirections").text("Directions: " + response.data[0].directionsInfo); 
// $(".crlaHours").text("Hours of Operation: " + response.data[0].operatingHours[1]); 

// $(".iaflDirections").text("Directions: " + response.data[0].directionsInfo); 
// $(".iaflHours").text(
//     "Winter Hours: " + response.data[0].operatingHours[0], 
//     "Summer Hours: " + response.data[0].operatingHours[1]
//     ); 
// $(".jodaDirections").text("Directions: " + response.data[0].directionsInfo); 
// $(".jodaHours").text("Hours of Operation: " + response.data[0].operatingHours[0]); 
// $(".lewiDirections").text("Directions: " + response.data[0].directionsInfo); 
// $(".lewiHours").text(
//     "Winter Hours: " + response.data[0].operatingHours[0], 
//     "Summer Hours: " + response.data[0].operatingHours[1]
//  )
//  $(".nepeDirections").text("Directions: " + response.data[0].directionsInfo)
//  $(".nepeHours").text("Hours of Operation: " + response.data[0].operatingHours[0].description); 

//     })


// })


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
            
                
                var parkImg = $("<img>").attr("src", response.data[0].images[0].url);
                var parkImg2 = $("<img>").attr("src", response.data[0].images[1].url);
               
            
                $(".parkDirections").text("Directions: " + response.data[0].directionsInfo);
                $(".parkHours").text("Hours of Operation: " + response.data[0].operatingHours[0].description);
                $(".parkImg").html(parkImg); 
                $(".parkImg2").html(parkImg2); 
                
                var parkZip = response.data[0].addresses[0].postalCode; 
                var weatherURL =  "https://api.weatherapi.com/v1/forecast.json?key=ae859661fd494bcea6740915202602&q=" + parkZip + "&days=5"; 

                $.ajax({
                    url: weatherURL,
                    method: "GET"
        
                }).then(function (response) {
                   
                    var weatherIcon0 = $("<img>").attr("src", response.forecast.forecastday[0].day.condition.icon);
                    var weatherIcon1 = $("<img>").attr("src", response.forecast.forecastday[1].day.condition.icon);
                    var weatherIcon2 = $("<img>").attr("src", response.forecast.forecastday[2].day.condition.icon);
                    var weatherIcon3 = $("<img>").attr("src", response.forecast.forecastday[3].day.condition.icon);
                    var weatherIcon4 = $("<img>").attr("src", response.forecast.forecastday[4].day.condition.icon);
                    
                   $(".weatherDate0").text(response.forecast.forecastday[0].date);
                   $(".weatherDate1").text(response.forecast.forecastday[1].date); 
                   $(".weatherDate2").text(response.forecast.forecastday[2].date);
                   $(".weatherDate3").text(response.forecast.forecastday[3].date); 
                   $(".weatherDate4").text(response.forecast.forecastday[4].date);

                    $(".weatherTemp0").text(response.forecast.forecastday[0].day.avgtemp_f + "F"); 
                    $(".weatherTemp1").text(response.forecast.forecastday[1].day.avgtemp_f + "F"); 
                    $(".weatherTemp2").text(response.forecast.forecastday[2].day.avgtemp_f + "F"); 
                    $(".weatherTemp3").text(response.forecast.forecastday[3].day.avgtemp_f + "F"); 
                    $(".weatherTemp4").text(response.forecast.forecastday[4].day.avgtemp_f + "F"); 

                    $(".weatherIcon0").html(weatherIcon0); 
                    $(".weatherIcon1").html(weatherIcon1); 
                    $(".weatherIcon2").html(weatherIcon2); 
                    $(".weatherIcon3").html(weatherIcon3); 
                    $(".weatherIcon4").html(weatherIcon4); 



            });

        // $('.pusher').css({'background-image':'url(' + [value] + ')'}, {'background-size': 'cover'});
        // }

    });
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


// javascript

// var for the parks
var parks = {
    crla : {
        name: "crater lake",
        zip: "97604",
    },
    iafl : {
        name: "ice age floods",
        zip: "99116",
    },
    joda : {
        name: "john day fossil beds",
        zip: "97848",
    },
    lewi : {
        name: "lewis and clark",
        zip: "97103",
    },
    crla : {
        name: "nez perce",
        zip: "83540",
    }
};    

// depending on park selected, by index, append to weather request

// select date for weather request

// append date and location (park) to weather request



// js function for changing background image
$('#ParkDropDown').on('change', function(){
value = $(this).val();

$('.pusher').css({'background-image':'url(' + [value] + ')'}, {'background-size': 'cover'});
});

//js function for onClick event of button

$('#buttonSelector').click(function(){
    
})


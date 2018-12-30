// ============== waits for the DOM to load ================= \\

$(document).ready(function () {

    // ============== Array of Dog Types ================= \\

    var topics = ['husky', 'akita', 'alaskan malamute', 'basset hound', 'airedale terrier', 'australian bulldog', 'bernese mountain dog', 'boerboel', 'boxer', 'bullmastiff', 'cane corso', 'collie', 'dobermann', 'dogue de bordeaux', 'english pointer', 'german shepherd']

    // ==============  ================= \\

    function displayDogInfo() {

        var dogBreed = $(this).attr('data-name');
        var debugResponse;
        var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=Jm0Lnl7Ny3f7ljroOhENuKSTWvuYo24i&q=' + dogBreed + '&limit=25&offset=0&rating=G&lang=en';
        
       

        // ============== Getting the API using AJAX ================= \\

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var dogDiv = $("<div class='movie'>");
            var imageURL = response.imageURL;
            var image = $('<img>').attr('src', imageURL);
            dogDiv.append(image);
            debugResponse = response;
            console.log(debugResponse);
            
        });
    }
       
    displayDogInfo();
    // ============== Setting the var queryURL and debugResponse ================= \\



    function renderButtons() {

        $('#dogTypes').empty();

        for (var i = 0; i < topics.length; i++) {
            var a = $('<button>');
            a.addClass('topic-btn');
            a.attr('data-name', topics[i]);
            a.text(topics[i]);
            $('.dogTypes').append(a);

        }

    };


    renderButtons();


    // ============== Getting the API using AJAX ================= \\

    $('#dogTypes').on('click', function () {
        var dogType = $('#dogTypes').val().trim();
        topics.push(dogType);


    })




    // ============== Displays the image on DOM ================= \\



    // ============== waits for the DOM to load ================= \\

    // ============== waits for the DOM to load ================= \\





});
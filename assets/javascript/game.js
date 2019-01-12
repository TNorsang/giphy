// ============== waits for the DOM to load ================= \\

$(document).ready(function () {
    
    // ============== Array of Dog Types ================= \\

    var topics = ['husky', 'akita', 'boxer', 'bullmastiff', 'collie', 'dobermann', 'dogue de bordeaux', 'english pointer',]


    function displayDogInfo() {

        var dogBreed = $(this).attr('data-name');
        // console.log(this);
        var debugResponse;
        var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=Jm0Lnl7Ny3f7ljroOhENuKSTWvuYo24i&q=' + dogBreed + '&limit=10&offset=0&rating=G&lang=en';



        // ============== Getting the API using AJAX and creating a call for the dog button being clicked ================= \\

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
           console.log(response);
            // creating a div to hold the dog types
            var dogDiv = $("<div class='dog'>");
            $('#dogImages').empty();
            for (var i = 0; i < 11; i++) {
                // storing the image 
                var imageURL = response.data[i].images.fixed_height.url;
                // Creating a variable to hold an element that will hold the image
                var image = $('<img>').attr('src', imageURL);

               
                // Appending the Image
                dogDiv.append(image);

                $("#dogImages").prepend(dogDiv);
            }
            debugResponse = response;
            console.log(debugResponse);
        });
    }





    // displaying dog data
    function renderButtons() {
       
        $('.dogButtons').empty();
        // this is looping the the array of dog types
        for (var i = 0; i < topics.length; i++) {
            var a = $('<button>');
            // adding a class to the variable a
            a.addClass('topic-btn');
            a.addClass('btn btn-outline-dark');
            // adding an attribute 'data name' to the variable a
            a.attr('data-name', topics[i]);
            // displaying the text 
            a.text(topics[i]);

            $('.dogButtons').append(a);

        }

    };





    // ============== When a movie button is clicked ================= \\

    $('.btn-dark').on('click', function(event) {
        event.preventDefault();
        // grabs the text input in the text field
        var dog = $('#dog-input').val().trim();
        console.log(dog);
        topics.push(dog);
        $('.dogButtons').append('<button>' + dog + '</button>');
        renderButtons();
    })


    $(document).on('click', '.topic-btn', displayDogInfo);

    renderButtons();



});
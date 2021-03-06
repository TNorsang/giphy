// ============== waits for the DOM to load ================= \\

$(document).ready(function () {

    // ============== Array of Dog Types ================= \\

    var topics = ['husky', 'akita', 'boxer', 'bullmastiff', 'collie', 'dobermann', 'dogue de bordeaux', 'english pointer',]

     // ============== To display/grab the dog info ================= \\
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
            var ratingDiv = $("<div class='rating'>");
            $('#dogImages').empty();
            for (var i = 0; i < 12; i++) {
                // storing the image 
                var rating = response.data[i].rating;
                var imageStill = response.data[i].images.fixed_height_still.url;
                var imageURL = response.data[i].images.fixed_height.url;


                // Creating a variable to hold an element that will hold the image
                var image = $('<img>').attr('src', imageStill);
                image.addClass('img-thumbnail');
                var rating = $('.dog').append('Rt ' + rating + '');
                // Adding class 
                image.addClass('gif');
                // Adding attr data-still to imageStill
                image.attr('data-still', imageStill);
                // Adding attr data-state to still
                image.attr('data-state', 'still');
                // Adding attr data-animate to imageURL
                image.attr('data-animate', imageURL);


                // Appending the Image
                dogDiv.append(image);

                $("#dogImages").prepend(dogDiv);

                 // ============== Making the images pause and play ================= \\
                $('.gif').on('click', function () {
                    var state = $(this).attr('data-state');

                    if (state === 'still') {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                    }
                    clearSearch();
                });


            }
            debugResponse = response;
            console.log(debugResponse);
        });
    }

     // ============== Clear the search text ================= \\
    function clearSearch() {
        $('#dog-input').clear();
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
            // appending the dog button to var a
            $('.dogButtons').append(a);

        }

    };

    // ============== When a movie button is clicked ================= \\

    $('.btn-dark').on('click', function (event) {
        event.preventDefault();
        // grabs the text input in the text field
        var dog = $('#dog-input').val().trim();
        console.log(dog);
        topics.push(dog);
        $('.dogButtons').append('<button>' + dog + '</button>');
        renderButtons();
    })

     // ============== a document on click where it grabs the dog info when class topic btn is clicked ================= \\
    $(document).on('click', '.topic-btn', displayDogInfo);

    renderButtons();



});
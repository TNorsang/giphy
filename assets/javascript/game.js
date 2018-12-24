// ============== waits for the DOM to load ================= \\

$(document).ready(function () {

    // ============== Array of Dog Types ================= \\

    var topics = ['husky', 'akita', 'alaskan malamute', 'basset hound', 'airedale terrier', 'australian bulldog', 'bernese mountain dog', 'boerboel', 'boxer', 'bullmastiff', 'cane corso', 'collie', 'dobermann', 'dogue de bordeaux', 'english pointer', 'german shepherd']

    // ============== Creates button from the arrays ================= \\

    for (var i = 0; i < topics.length; i++) {
        $('.dogTypes').append('<button>' + topics[i] + '</button>');
    }

    // ============== Getting the API using AJAX ================= \\
    var queryURL = 'https://api.giphy.com/v1/gifs/random?api_key=Jm0Lnl7Ny3f7ljroOhENuKSTWvuYo24i&tag=dogs';
    var debugResposne;
    $.ajax({
        url: queryURL,
        method: "GET"

    }).then(function (response) {
        debugResposne = response;
        console.log(response);
    });

    // ============== Displays the image on DOM ================= \\

    

    // ============== waits for the DOM to load ================= \\

    // ============== waits for the DOM to load ================= \\





});
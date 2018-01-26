var request = require("request");
var twitter = require("twitter");
var spotify = require("node-spotify-api");

//HMMMMM... HOW DO I SEND THE KEYS TO THE API? MAYBE IT'S INSIDE THE FUNCTIONS
//var keys = ... keys.js
//I FORGOT HOW TO USE THE .ENV FILE!

//command line calls these various cases/functions (Twitter, Spotify, OMDB)
switch(process.argv[2]) {
    case "my-tweets":
        //USE EXAMPLE BELOW TO SEND TWITTER API DATA TO GET LAST 20 TWEETS
        client.get(path, params, callback);
        break;

    case "spotify-this-song":
        //SEND NODE-SPOTIFY-API DATA TO GET INFO ON SONG TITLE ENTERED
            // * Artist(s)
            // * The song's name
            // * A preview link of the song from Spotify
            // * The album that the song is from
            // * If no song is provided then your program will default to "The Sign" by Ace of Base.
        break;

    case "movie-this":
        request("http://www.omdbapi.com/?t=" + process.argv[3] + "&apikey=40e9cece", function(error, response, body) {

            // request successful
            if (!error && response.statusCode === 200) {

                // Parse the body of the site and recover various parameters
                console.log("title: " + JSON.parse(body).Title);
                console.log("release year: " + JSON.parse(body).Year);
                console.log("IMDB rating: " + JSON.parse(body).imdbRating);
                console.log("Rotten Tomatoes rating: " + JSON.parse(body).ROTTENTOMATOES!!!Rating);
                console.log("country: " + JSON.parse(body).Country);
                console.log("language: " + JSON.parse(body).Language);
                console.log("plot: " + JSON.parse(body).PlotLong);
                console.log("actors: " + JSON.parse(body).Actors);

                } else {
                //suggest they watch Mr. Nobody [but why?!?]
                console.log("If you haven't watched <i>Mr. Nobody</i>, then you should: <http://www.imdb.com/title/tt0485947/>");
                console.log("And it's on Netflix!");

                } 
        });
        break;
    
    case "do-what-it-says":
        fs.readFile("random.txt", "utf8", , function(error, data) {
            //check for error
            if (error) {
              return console.log(error);
            }
        
        //HMMM, how to send command line to... where? 
            // * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

          });
        break;
    
    }
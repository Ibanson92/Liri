require("dotenv").config();
var Twitter = require('twitter');
var Spotify = require("node-spotify-api");
var request = require("request");
var fs = require("fs");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var commands = process.argv[2];
var query = process.argv[3];
// var dataArr = data.split(",");

if (commands === "my-tweets"){
    var params = {screen_name: 'nodejs'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        console.log(tweets[0].text);
        for (var i = 0; i < 20; i++){
            console.log(tweets[i].text);
        }
    }
    });
}

if (commands === "spotify-this-song"){
    spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
        if (err) {
        return console.log('Error occurred: ' + err);
        }
            console.log(data.tracks.items[0].album.artists[0].name);
            console.log(data.tracks.items[0].album.name);
            console.log(data.tracks.items[0].album.external_urls);   
            console.log(data.tracks.items[0].name);
            
    });
}

if (commands === "movie-this"){
    var queryUrl = "http://www.omdbapi.com/?t=" + query + "&apikey=e9e71b7c"; {
        request(queryUrl, function(error, response, body) {

            // If the request is successful
            if (!error && response.statusCode === 200) {
          
              // Parse the body of the site and recover just the imdbRating
              // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
              console.log("Title: " + JSON.parse(body).Title);
              console.log("Release Year: " + JSON.parse(body).Year);
              console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
              console.log("IMDB Rating: " + JSON.parse(body).Ratings[1].Value);
              console.log("Country: " + JSON.parse(body).Country);
              console.log("Language: " + JSON.parse(body).Language);
              console.log("Plot: " + JSON.parse(body).Plot);
              console.log("Actors: " + JSON.parse(body).Actors);

            //   console.log(JSON.parse(body));
            //   console.log(queryUrl);
            }
          });
            
    };
}

if (commands === "do-what-it-says"){
    // declare randomchoice variable
    // open random.txt and read file
    // split data into arr
    // generate random number based on length of data Array
    // randomly select song from data arr
    // asssign random song to randomChoice

    
         fs.readFile("random.txt", "utf8", function(err, data) {
            if (err) {
                return console.log(err);
              }
            
              var dataArr = data.split(",");
        // return console.log('Error occurred: ' + err);
        console.log(data);
        // console.log(dataArr);
        
        }
        
            
    )};



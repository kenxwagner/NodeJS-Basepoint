//This is practice by creating a simple way to look at a user's badge count and JavaScript points 
//Solve it by using Node.js to connect to Treehouse's API to get profile information to print out
var https = require("https");
var username = "chalkers";

function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
  console.log(message);
  
}
  //Connect to the API URL
var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response) {
  var body = "";
    
  //Here the app will read the data
    response.on('data', function (chunk) {
      body += chunk;
   });
  response.on('end', function(){
    console.log(body);
    console.log(typeof body);
  });
  //Here the app will parse (or analyze) the data
  //Here the app will now print the data in an organized format.
  
  
});
request.on("error", function(error){
           console.error(error.message);
                      });
// var upwork = require("upwork-api");
// upwork.find({url:"url"}), function(err, result) {
 
//   if (err) {
//     console.log(err);
//   }
  
//   console.log(JSON.stringify(result, null, 2));
// };


var Search = require('upwork-api/lib/routers/jobs/search.js').Search;

var jobs = new Search(api);
jobs.find(params, function(error, data) {
  console.log(data);
});
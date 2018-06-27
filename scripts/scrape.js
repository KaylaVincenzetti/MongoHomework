
var axios = require("axios");
var cheerio = require("cheerio");


var scrape = function() {
  
  return axios.get("https://www.entrepreneur.com/topic/technology").then(function(res) {
    console.log("working");
    var $ = cheerio.load(res.data);
    
    var articles = [];

    
    $(".block").each(function(i, element) {
     
      var head = $(this)
        
        .children("a")
        .text()
        .trim();

    
      var url = "#"
    
      var sum = "#"

      if (head && sum && url) {
      
        var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
        var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

       

        var dataToAdd = {
          headline: headNeat,
          summary: sumNeat,
          url: url
        };

        articles.push(dataToAdd);
      }
    });
    return articles;
  });
};

// Export the function, so other files in our backend can use it
module.exports = scrape;

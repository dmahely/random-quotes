// changes the background color to a random color
function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";

  document.body.style.background = bgColor;
  document.getElementById("quote").style.color = bgColor;
  document.getElementById("actualQuote").style.color = bgColor;
  document.getElementById("byline").style.color = bgColor;
  document.getElementById("twitter").style.color = bgColor;
  document.getElementById("newQuote").style.background = bgColor;
}

// generates a random quote
function randomQuotes() {
  $.ajax({
    url: 'http://quotesondesign.com/wp-json/posts',
    success: function(result) {
      $("#actualQuote").html(JSON.stringify(result[0].content).replace(/\<.\>|\n|\<\/.\>/gi, ''));
      console.log("HTML of ACTUAL QUOTES IS " + $("#actualQuote").html());
      $("#byline").html("by " + JSON.stringify(result[0].title).replace(/"/g,""));
      // console.log("HTML of ACTUAL QUOTES IS " + String($("#actualQuote").html()));
      // $("#cat").html(JSON.stringify(result.cat).replace(/"/g,""));
      // console.log(JSON.stringify(result.cat));
      random_bg_color();

      $("#twitter").click(function tweetItOut(){
        var quote = $("#actualQuote").html();
        var author = $("#byline").html();
        var hashtag = $("#cat").html();
        // console.log("Hashtag: " + hashtag);
        var url = "https://twitter.com/intent/tweet";
        window.open(url + "?text=" + quote + "%20" + author + ";hashtags=" + hashtag);
      });
}});
}
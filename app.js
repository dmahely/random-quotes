// https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 // console.log(bgColor);

  document.body.style.background = bgColor;
  document.getElementById("quote").style.color = bgColor;
  document.getElementById("actualQuote").style.color = bgColor;
  document.getElementById("byline").style.color = bgColor;
  document.getElementById("twitter").style.color = bgColor;
  document.getElementById("newQuote").style.background = bgColor;
    }

function randomQuotes() {
  $.ajax({
    url: 'https://talaikis.com/api/quotes/random/',
    success: function(result) {
      $("#actualQuote").html(JSON.stringify(result.quote));
      $("#byline").html("by " + JSON.stringify(result.author).replace(/"/g,""));
      console.log("HTML of ACTUAL QUOTES IS " + $("#actualQuote").html());
      // console.log("HTML of ACTUAL QUOTES IS " + String($("#actualQuote").html()));
      $("#cat").html(JSON.stringify(result.cat).replace(/"/g,""));
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
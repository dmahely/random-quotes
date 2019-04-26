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
    url: "https://api.forismatic.com/api/1.0/?",
    dataType: "jsonp",
    data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
    success: function(result) {
      let quote = '"' + JSON.stringify(result.quoteText).replace(/\<.\>|\\n.|\s\s+|"|\<\/.\>/gi, '') + '"';
      // console.log("Quote: " + quote);
      let author = JSON.stringify(result.quoteAuthor).replace(/"/g, "");
      console.log("Author: " + author);
      if(author === ' ' || author === '')
        author = 'Unknown';
      $("#actualQuote").html(quote);
      $("#byline").html("— " + author);
      random_bg_color();
      $("#twitter").attr("href", "https://twitter.com/intent/tweet" + "?text=" + quote + "%20" + author);
  }, cache: false});
}
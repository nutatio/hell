function importGSS(t) {
  $.each(t.feed.entry.slice(0,1), function() {
    $("filmtitle").addClass("flex-container").prepend("<span>" + this.gsx$filmtitle.$t + "</span>");
    $("a.filmlink").prop("href",this.gsx$filmlink.$t);
    $("img.filmposter").prop("src",this.gsx$filmposter.$t);
  }),
  $.each(t.feed.entry.slice(0,1), function() {
    $("animetitle").addClass("flex-container").prepend("<span>" + this.gsx$animetitle.$t + "</span>");
    $("a.animelink").prop("href",this.gsx$animelink.$t);
    $("img.animeposter").prop("src",this.gsx$animeposter.$t);
  }),
  $.each(t.feed.entry.slice(0,1), function() {
    $("serialtitle").addClass("flex-container").prepend("<span>" + this.gsx$serialtitle.$t + "</span>");
    $("a.seriallink").prop("href",this.gsx$seriallink.$t);
    $("img.serialposter").prop("src",this.gsx$serialposter.$t);
  })
}
//addClass("flex-container").prepend("<span>" + this.gsx$poster.$t + "</span>")
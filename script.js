function importGSS(t) {
  $.each(t.feed.entry.slice(0,1), function() {
    $("player1").addClass("flex-container").prepend("<span>" + this.gsx$player1.$t + "</span>")
  }),
  $.each(t.feed.entry.slice(0,1), function() {
    $("player2").prepend("<span>" + this.gsx$player2.$t + "</span>")
  })
}
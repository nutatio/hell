let bracketToggle = document.getElementById('btn-change');
let bracket = document.getElementById('bracket');
let otherBracket = document.getElementById('otherBracket');
if(bracketToggle){
  console.log("catch");
  bracketToggle.addEventListener('click', function(e){
  e.preventDefault();
  bracket.classList.toggle('active');
  otherBracket.classList.toggle('active');
});
}
function importGSS(t) {
  $.each(t.feed.entry.slice(0,1), function() {
    $("booba1").addClass("flex-container").prepend("<span>" + this.gsx$semiwinner.$t + "</span>")
  }), 
  $.each(t.feed.entry.slice(1,2), function(){
    $("booba2").addClass("flex-container").prepend("<span>" + this.gsx$semiwinner.$t + "</span>")
  }),
  $.each(t.feed.entry.slice(2,3), function(){
    $("booba3").addClass("flex-container").prepend("<span>" + this.gsx$semiwinner.$t + "</span>")
  }),
  $.each(t.feed.entry.slice(3,4), function(){
    $("booba4").addClass("flex-container").prepend("<span>" + this.gsx$semiwinner.$t + "</span>")
  }),
  $.each(t.feed.entry.slice(0,1), function(){
    $("abooba1").addClass("flex-container").prepend("<span>" + this.gsx$winner.$t + "</span>")
  }),
  $.each(t.feed.entry.slice(1,2), function(){
    $("abooba2").addClass("flex-container").prepend("<span>" + this.gsx$winner.$t + "</span>")
  }),
  $.each(t.feed.entry.slice(0,1), function(){
    $("semiLoser1").addClass("flex-container").prepend("<span>" + this.gsx$semiloser.$t + "</span>")
  }),
  $.each(t.feed.entry.slice(1,2), function(){
    $("semiLoser2").addClass("flex-container").prepend("<span>" + this.gsx$semiloser.$t + "</span>")
  }),
  $.each(t.feed.entry.slice(2,3), function(){
    $("semiLoser3").addClass("flex-container").prepend("<span>" + this.gsx$semiloser.$t + "</span>")
  }),
  $.each(t.feed.entry.slice(3,4), function(){
    $("semiLoser4").addClass("flex-container").prepend("<span>" + this.gsx$semiloser.$t + "</span>")
  }),
  $.each(t.feed.entry.slice(0,1), function(){
    $("loser1").addClass("flex-container").prepend("<span>" + this.gsx$loser.$t + "</span>")
  }),
  $.each(t.feed.entry.slice(1,2), function(){
    $("loser2").addClass("flex-container").prepend("<span>" + this.gsx$loser.$t + "</span>")
  })
}
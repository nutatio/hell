let bracketToggle = document.getElementById('btn-change');
let bracket = document.getElementById('bracket');
let otherBracket = document.getElementById('otherBracket');

let grandButtonToggle = document.getElementById('btn-grand')
let grandBracket = document.getElementById('grandFinal');
let notGrandBracket = document.getElementById('notGrandFinal');
if(grandButtonToggle){
  console.log();
  grandButtonToggle.addEventListener('click', function(e){
    e.preventDefault();
    notGrandBracket.hasAttribute("hidden") ? notGrandBracket.removeAttribute("hidden") : notGrandBracket.setAttribute("hidden","enabled");
    grandBracket.hasAttribute("hidden") ? grandBracket.removeAttribute("hidden")  : grandBracket.setAttribute("hidden","enabled");
  })
}

if(bracketToggle){
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
  }),
  $.each(t.feed.entry.slice(0,1), function(){
    $("grand1").addClass("flex-container").prepend("<span>" + this.gsx$grand.$t + "</span>")
  }),
  $.each(t.feed.entry.slice(1,2), function(){
    $("grand2").addClass("flex-container").prepend("<span>" + this.gsx$grand.$t + "</span>")
  })
}
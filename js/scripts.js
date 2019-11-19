$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var textInput = $("input#message").val().toUpperCase();
    
    $(".output").text(textInput);

  });

});
function updateCharacterCount() {
    var message = document.getElementById("message").value;
    var remainingCharacters = 400 - message.length;
    document.getElementById("characterCount").innerHTML = "You have " + remainingCharacters + " characters left.";
  }
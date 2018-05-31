module.exports = Phrase;

// Reverses a string.
String.prototype.reverse = function(){
  return Array.from(this).reverse().join("");
}

function Phrase(content) {
  this.content = content;

  this.processedContent = function() {
    return this.letters().toLowerCase();
  }

  this.letters = function(){
    return this.content.split(/[^a-zA-Z]/).join("");
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function() {
    return this.processedContent() === this.processedContent().reverse();
  }

}
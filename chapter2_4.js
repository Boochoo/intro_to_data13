function letter_array_object (string)
  {
  this.letters = string.split();

  this.draw = function ()
    {
    var word = "";
    for (var x = 0; x < this.letters.length; x += 1)
     word = word.concat (this.letters[x]);
    console.log (word);
    }
  }

var word = new letter_array_object ("astrophysics");

word.draw();

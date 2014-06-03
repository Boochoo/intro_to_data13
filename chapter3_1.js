function List ()
  {
  this.insert_if_largest = function (value, after)
    {
    // assume it's the largest until we prove it's not
    var is_largest = true;

    this.front();
    while (is_largest == true && this.currPos() < this.length() - 1)
      {
      if (this.getElement > value) is_largest = false;
      }
    if (is_largest == true) this.insert (value, after);
    }
  }

function List ()
  {
  this.insert_if_smallest = function (value, after)
    {
    // assume it's the sm until we prove it's not
    var is_smallest = true;

    this.front();
    while (is_smallest == true && this.currPos() < this.length() - 1)
      {
      if (this.getElement > value) is_smallest = false;
      }
    if (is_smallest == true) this.insert (value, after);
    }
  }

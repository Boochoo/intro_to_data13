var rented = new List();

function checkOut(name, movie, filmList, customerList, rented)
  {
  if (customerList.contains(movie))
    {
    filmList.append (movie);
    customerList.remove (movie);
    rented.remove (movie);
    }
  else
    {
    print(movie + " is not available.");
    }
  }

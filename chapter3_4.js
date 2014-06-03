var rented = new List();

function checkOut(name, movie, filmList, customerList, rented)
  {
  if (movieList.contains(movie))
    {
    var c = new Customer(name, movie);
    customerList.append(c);
    filmList.remove(movie);
    rented.append (movie);

    rented.front();
    while (rented.currPos() < rented.length() - 1)
      console.log (rented.getElement);

    }
  else
    {
    print(movie + " is not available.");
    }
  }

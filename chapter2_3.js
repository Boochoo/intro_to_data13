function monthly_temp_object (rows, columns, value)
  {
  this.temp = new Array();

  for (var y = 0; y < columns; y += 1)
    {
    var row = new Array();
    for (var x = 0; x < rows; x += 1) row.push (value);
    this.temp[y] = row;
    }

  //////////////////////////////////////////////////

  this.display_monthly_average = function ()
    {
    var sum = 0;
    var total_temps = 0;

    for (var y = 0; y < this.temp.length; y += 1)
      for (var x = 0; x < this.temp[y].length; x += 1)
        {
        sum += this.temp[y][x];
        total_temps += 1;
        }

    console.log (sum / total_temps);
    }

  //////////////////////////////////////////////////

  this.display_weekly_average (week)
    {
    var sum = 0;

    for (var day = 0; day < this.temp[week].length; day += 1)
      {
      sum += this.temp[y][x];
      total_temps += 1;
      }

    console.log (sum / total_temps);
    }

//////////////////////////////////////////////////

  this.display_all_week_averages ()
    {
    for (var week = 0; week < this.temp.length; week += 1)
      this.display_weekly_average (week);
    }
  }

//////////////////////////////////////////////////

var monthly_temp = new monthly_temp_object (4, 7, 69);

// for (var y = 0; y < monthly_temp.temp.length; y += 1)
//   {
//   for (var x = 0; x < monthly_temp.temp[y].length; x += 1)
//     {
//     console.log (monthly_temp.temp[y][x]);
//     }
//   }

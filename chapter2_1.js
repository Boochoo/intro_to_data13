function grades_object ()
  {
  this.grades = [];

  this.add = function (new_grade)
    {
    this.grades.push (new_grade);
    }

  this.display_average = function ()
    {
    var sum = 0;
    for (var x = 0; x < this.grades.length; x += 1)
      {
      sum += this.grades[x];
      }
    var average = sum / this.grades.length;
    console.log (average);
    }
  }

var grades = new grades_object();
grades.add (100);
grades.add (95);
grades.add (85);
grades.display_average();
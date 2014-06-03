function person_object (name, gender)
  {
  this.name = name;
  this.gender = gender;
  }

var list = new List();

list.append (new person_object ("Bob", "male"));
list.append (new person_object ("Jim", "male"));
list.append (new person_object ("Jen", "female"));
list.append (new person_object ("Sam", "male"));
list.append (new person_object ("Eli", "male"));
list.append (new person_object ("Sue", "female"));
list.append (new person_object ("May", "female"));
list.append (new person_object ("Jon", "male"));
list.append (new person_object ("Zed", "male"));
list.append (new person_object ("Luc", "male"));

function show_all_gender (list, gender)
  {
  list.front();
  while (list.currPos() < list.length() - 1)
    {
    var person = list.getElement;
    if (person.gender == gender) console.log (person.name);
    }
  }

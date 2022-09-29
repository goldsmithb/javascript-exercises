//Given an array of objects representing people 
//with a birth and death year, return the oldest person.
/*{
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  }*/
  // return true if p1 is older than p2
  function isOlder(p1, p2) {
    let age1 = p1.yearOfDeath - p1.yearOfBirth;
    let age2 = p2.yearOfDeath - p2.yearOfBirth;
    return age1 >= age2;
  }

const findTheOldest = function(people) {
  let temp = new Object;
  temp.yearOfBirth = 2022;
  temp.yearOfDeath = 2022;
  for (person of people) {
    if (isOlder(person, temp)) {
      console.log(person.name + " is older than " + temp.name);
      temp = person;
    }
  }
  return temp;
};

// Do not edit below this line
module.exports = findTheOldest;

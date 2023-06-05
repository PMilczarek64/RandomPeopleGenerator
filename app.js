const fs = require('fs');

const genders = ['male', 'female'];
const maleNames = ['Jack', 'Jacob', 'Stephan'];
const femaleNames = ['Barbara', 'Stephannie', 'June'];
const lastNames = ['Kowalski', 'Eastwood', 'Johnson'];
const people = [];

const randChoice = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const randomAge = (minAge, maxAge) => {
  const age = Math.floor(Math.random() * (maxAge - minAge + 1) + minAge);
  return age;
}

for(let i = 0; i < 20; i++) {
  const gender = randChoice(genders);
  const newPerson = {
    gender: gender,
    firstName: gender === 'male' ? randChoice(maleNames) : randChoice(femaleNames),
    lastName: randChoice(lastNames),
    age: randomAge(18, 100),
  };
  people.push(newPerson);
};

const typedArr = JSON.stringify(people);

fs.writeFile('people.json', typedArr, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

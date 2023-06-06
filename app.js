const fs = require("fs");

const genders = ["male", "female"];
const maleNames = ["Jack", "Jacob", "Stephan", "John", "Robert", "William"];
const femaleNames = ["Barbara", "Stephannie", "June", "Linda", "Mary", "Patricia"];
const lastNames = ["Kowalski", "Eastwood", "Johnson", "Smith", "Brown", "Lewandowski"];
const emailDomains = ["gmail.com", "yahoo.com", "outlook.com"];
const people = [];

const randArrChoice = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const randomAge = (minAge, maxAge) => {
  const age = Math.floor(Math.random() * (maxAge - minAge + 1) + minAge);
  return age;
};

const randomPhone = () => {
  let phone = "";
  for (let i = 0; i < 9; i++) {
    const newCipher = Math.floor(Math.random() * 10);
    phone += newCipher;

    if ((i + 1) % 3 === 0 && i !== 8) {
      phone += "-";
    };
  };
  return phone;
};

for (let i = 0; i < 20; i++) {
  const gender = randArrChoice(genders);
  const firstName =
    gender === "male" ? randArrChoice(maleNames) : randArrChoice(femaleNames);
  const lastName = randArrChoice(lastNames);
  const email = `${firstName}.${lastName}@${randArrChoice(emailDomains)}`;
  const newPerson = {
    gender: gender,
    firstName: firstName,
    lastName: lastName,
    age: randomAge(18, 100),
    email: email.toLowerCase(),
    phoneNumber: randomPhone(),
  };
  people.push(newPerson);
}

const typedArr = JSON.stringify(people);

fs.writeFile("people.json", typedArr, (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

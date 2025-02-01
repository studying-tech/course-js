let person = {
  name: 'John',
  age: 30,
  isStudent: false,
};

console.log(person);

person.job = 'Developer'; // 新しいプロパティの追加

console.log(person);

person['salary'] = 50000; // 新しいプロパティの追加

console.log(person);

console.log('isStudent' in person);
delete person.isStudent; // プロパティの削除

console.log(person);

for (const key in person) {
  console.log(key + ': ' + person[key]);
}

console.log('isStudent' in person); // true
console.log(person.hasOwnProperty('age')); // true

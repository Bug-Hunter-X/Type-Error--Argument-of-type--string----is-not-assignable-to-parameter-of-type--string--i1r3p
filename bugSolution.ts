function greeter(person: string): string {
  return `Hello, ${person}!`;
}

let users = ["Jane Doe", "John Smith"];

// Solution 1: Iterate over the array
users.forEach(user => console.log(greeter(user)));

// Solution 2: Modify the function signature (if appropriate)
function greeterArray(people: string[]): string[] {
  return people.map(person => `Hello, ${person}!`);
}
console.log(greeterArray(users));
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} makes a sound`);
  }
}

const cat = new Animal('Cat');
cat.makeSound(); // Output: Cat makes a sound

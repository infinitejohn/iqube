const person = {
    firstName: "John",
    lastName: "Doe",
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  
  console.log(person.getFullName()); // Calling the method on the object
  
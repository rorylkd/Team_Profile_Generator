class Employee {
  constructor(name, id, email) {
    //Checking validity of responses
    const nameless = name === "";
    const emailless = email === "";
    const idless = id === "";

    if (nameless) {
      throw Error("Please provide a name");
    }
    if (emailless) {
      throw Error("Please provide an email");
    }
    if (idless) {
      throw Error("Please provide an id");
    }
    if (!email.includes("@")) {
      throw Error("Please provide a valid email");
    }
    const regexNumbersAndSpecialChars = /^[0-9!@#\$%\^\&*\)\(+=._-]/;
    if (name.match(regexNumbersAndSpecialChars)) {
      throw Error("Please provide a valid name");
    }
    const regexLettersAndSpecialChars = /^[a-zA-Z!@#\$%\^\&*\)\(+=._-]/;
    if (id.match(regexLettersAndSpecialChars)) {
      throw Error("Please provide a valid id");
    }

    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName(name) {
    console.log(`${name}`);
  }
  getID(id) {
    console.log(`${id}`);
  }
  getEmail(email) {
    console.log(`${email}`);
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;

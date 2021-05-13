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
    // const regexLettersAndSpecialChars = /^[a-zA-Z!@#\$%\^\&*\)\(+=._-]/;
    // if (id.match(regexLettersAndSpecialChars)) {
    //   throw Error("Please provide a valid id");
    // }
    const regexNumbersAndSpecialChars = /^[0-9!@#\$%\^\&*\)\(+=._-]/;
    if (name.match(regexNumbersAndSpecialChars)) {
      throw Error("Please provide a valid name");
    }
  }
}

module.exports = Employee;

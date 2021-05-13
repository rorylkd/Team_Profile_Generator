class Employee {
  constructor(names, id, email) {
    //Checking validity of responses
    const nameless = names === "";
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
    if (names.match(regexNumbersAndSpecialChars)) {
      throw Error("Please provide a valid name");
    }
    const regexLettersAndSpecialChars = /^[a-zA-Z!@#\$%\^\&*\)\(+=._-]/;
    if (id.match(regexLettersAndSpecialChars)) {
      throw Error("Please provide a valid id");
    }
  }
}

module.exports = Employee;

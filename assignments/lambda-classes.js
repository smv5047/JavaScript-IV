// CODE here for your Lambda Classes

class Person {
    constructor(personAttributes) {
      this.name = personAttributes.name;
      this.age = personAttributes.age;
      this.location = personAttributes.location;
    }
     speak() {
      return `Hello my name is ${this.name}, I am from ${this.location}.`;
    };
  };
 
   const fred = new Person({
    name: 'Fred',
    age: 37,
    location: 'Bedrock'
  });
 
  console.log(fred);
  console.log(fred.speak());
 
 
  class Instructor extends Person {
    constructor(personAttributes) {
        super(personAttributes);
      this.specialty = personAttributes.specialty;
      this.favLanguage = personAttributes.favLanguage;
      this.catchPhrase = personAttributes.catchPhrase;
    };
     demo(subject) {
      return `Today we are learning about ${subject}`;
    };
 
    // grade(student, subject) {
    //     `${student.name} receives a perfect score on ${subject}.`;
    // };
  };
 
  const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });
 
  console.log(fred);
  console.log(fred.demo("JavaScript"));
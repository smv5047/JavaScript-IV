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
 
  //Unit test 1 - Code works. Moving on.
 //   const fred = new Person({
 //     name: 'Fred',
 //     age: 37,
 //     location: 'Bedrock'
 //   });
 
 //   console.log(fred);
 //   console.log(fred.speak());
 
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
 
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    };
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
 //   console.log(fred.grade(stephen, 'JavaScript'))
 //Must be logged after the creation of the student object.
 
 
  class Student extends Person {
    constructor(personAttributes) {
        super(personAttributes);
      this.previousBackground = personAttributes.previousBackground;
      this.className = personAttributes.className;
      this.favSubjects = personAttributes.favSubjects;
    };
 
    listsSubjects() {
        return this.favSubjects.join(', ');
      };
 
      PRAssignment(subject) {
            return `${this.name} has submitted a PR for ${subject}`;
          };
 
      sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
          };
    };
 
 const stephen = new Student( {
    name: 'Stephen',
    age: 31,
    location: 'Chicago',
    favSubjects: ['Javascript', 'HTML', 'CSS', 'LESS'],
    className: 'WEBPT8',
    previousBackground: 'Musician'
 });
 
 
 console.log(fred.grade(stephen, 'JavaScript'))
 
 
 console.log(stephen);
 
 console.log(stephen.listsSubjects());
 
 console.log(stephen.PRAssignment('JavaScript'));
 
 console.log(stephen.sprintChallenge('JavaScript'));
 
 
 
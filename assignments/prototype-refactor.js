/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

// function GameObject(attributes) {
    // this.createdAt = Date();
    // this.name = attributes.name;
    // this.dimensions = attributes.dimensions;
//   }


// Reformatted GameObject class //
class GameObject {
  constructor(attributes) {
    this.createdAt = Date();
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
  }
  destroy () {
    return `${this.name} was removed from the game.`;
  }
}

  
  // GameObject.prototype.destroy = function destroy() {
  //   return `${this.name} was removed from the game.`;
  // };
  
  // Test to make sure GameObject is working
  // const box = new GameObject ({
  //   createdAt: 12,
  //   name: "boxy",
  //   dimensions: {
  //     length: 2,
  //     width: 2,
  //     height: 2
  //   }
  // })
  // console.log(box);
  
  
  
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  


  // function CharacterStats(attributes) {
  //   GameObject.call(this, attributes)
  //   this.healthPoints = attributes.healthPoints;
  //  }
   
  //  CharacterStats.prototype = Object.create(GameObject.prototype);
   
  //  CharacterStats.prototype.takeDamage = function takeDamage() {
  //   return `${this.name} took damage.`;
  //  };

   //Reformatted CharacterStats Class

  class CharacterStats extends GameObject {
     constructor (attributes){
        super(attributes);
        this.healthPoints = attributes.healthPoints;
     }
     takeDamage() {
      return `${this.name} took damage.`;
     }
   }


   
   
  //  UNIT TEST - Below code works. Includes the takeDamage code from the CharacterStats prototype.
  //  const heavyBag = new CharacterStats({
  //    createdAt: Date(),
  //    name: "punching bag",
  //    dimensions: {
  //      length: 2,
  //      width: 2,
  //      height: 2,
  //    },
  //    healthPoints: 5,
  //  });
   
  //  console.log(heavyBag);
   
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  
  // function Humanoid(attributes) {
  //   CharacterStats.call(this, attributes)
  //   this.team = attributes.team,
  //   this.weapons = attributes.weapons;
  //   this.language = attributes.language;
  //  };
   
  //  Humanoid.prototype = Object.create(CharacterStats.prototype);
   
  //  Humanoid.prototype.greet = function greet() {
  //   return `${this.name} offers a greeting in ${this.language}.`;
  //  };
   
  // Reformatted Humanoid Class

  class Humanoid extends CharacterStats {
    constructor(attributes) {
      super(attributes);
      this.team = attributes.team,
      this.weapons = attributes.weapons;
      this.language = attributes.language;
    }
    greet () {
      return `${this.name} offers a greeting in ${this.language}.`;
    }
  }


   
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
    //  function Hero(attributes) {
  //   Humanoid.call(this, attributes)
  // };
  
  // function Villain(attributes) {
  //   Humanoid.call(this, attributes)
  // };
  
  // //hero object
  // const mario = new Hero({
  //   createdAt: new Date(),
  //   dimensions: {
  //     length: 1,
  //     width: 2,
  //     height: 3,
  //   },
  //   healthPoints: 10,
  //   name: 'Mario',
  //   team: 'Mushroom Kingdom',
  //   weapons: [
  //     'Mushroom',
  //     'Flower',
  //   ],
  //   language: 'Italian',
  // });
  
  // function damage(attacked) {
  //   attacked.healthPoints = attacked.healthPoints - Math.floor(Math.random() * Math.floor(2));
  // }
  
  // Humanoid.prototype.greet = function greet() {
  //   return `${this.name} offers a greeting in ${this.language}.`;
  // };
  
  // console.log(damage(mario));
  
  
  // // (Bowser attacking)
  
  // /* We need to have a method in the Bowser object that takes an argument for who gets attacked and then lowers
  // that argument's health points.
  
  // function damage(attacked) {
  //   attacked.healthPoints = attacked.healthpoints - Math.floor(Math.random() * Math.floor(2));
  // }
  
  // */
  // //villain object
  // const bowser = new Villain({
  //   createdAt: new Date(),
  //   dimensions: {
  //     length: 2,
  //     width: 3,
  //     height: 5,
  //   },
  //   healthPoints: 20,
  //   name: 'Bowser',
  //   team: 'Koopa Kingdom',
  //   weapons: [
  //     'Fire Breath',
  //     'Bombombs',
  //   ],
  
  //   language: 'Incoherent growling',
  // });
  
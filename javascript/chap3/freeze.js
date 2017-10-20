'use strict';

var pet = {
  type: 'aaaaaaaaa',
  name: 'bbbbbbbbb'
};

// Object.preventExtensions(pet);
// Object.seal(pet);
Object.freeze(pet);

pet.name = 'fffffff';
delete pet.type;
pet.weight = 1111;

console.log(pet);

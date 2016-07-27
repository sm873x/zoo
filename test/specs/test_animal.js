(function() {
    'use strict';

    var assert = window.chai.assert;

    suite('animal constructor function', function() {

        test('ensure animal constructor function exists', function() {
            assert.ok(window.zoo.Animal, 'animal function exists');
            assert.strictEqual(typeof(window.zoo.Animal), 'function',
                                'animal is a function' );
            console.log(window.zoo.Animal);
        });

        test('animals have a name and date of birth', function() {
            var fred = new window.zoo.Animal('fred');
            var date = new Date();
            console.log(fred);
            assert.strictEqual(fred.name, 'fred', 'animal has name');
            assert.strictEqual(fred.dateOfBirth.getFullYear(), date.getFullYear(), 'animal birth year matches');
            assert.strictEqual(fred.dateOfBirth.getMonth(), date.getMonth(), 'animal birth month matches');
            assert.strictEqual(fred.dateOfBirth.getDate(), date.getDate(), 'animal birth date matches');
        });

        test('animal with no name argument gets name of "animal"', function() {
            var newAnimal = new window.zoo.Animal();
            assert.strictEqual(newAnimal.name, 'animal', 'animal gets assigned name animal');
        });

        test('expired animal is dead', function () {
            var fred = new window.zoo.Animal('fred');
            assert.isFalse(fred.isDead, 'animal starts out alive');

            fred.expire();
            assert.isTrue(fred.isDead, 'animal is dead');
        });

        test('animal constructor has method for getting age', function() {
            var fred = new window.zoo.Animal('fred');
            fred.dateOfBirth = new Date('1980-05-01');
            assert.strictEqual(fred.getAge(), 36);
        });

        test('if animal is dead age function throws error', function() {
            var direwolf = new window.zoo.Dog('trevor');
            assert.throws(function() {
                direwolf.expires();
            }, Error);
        });

        test('animal can implement toString method', function() {
            var sally = new window.zoo.Animal('sally');
            assert.strictEqual(sally.toString(), 'I am an animal named sally',
                'animal object can implement toString method');
        });
    });

})();

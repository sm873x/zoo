(function() {
    'use strict';

    var assert = window.chai.assert;

    suite('dog species', function(){

        test('dog constructor function inherits name and date of birth', function(){
            var poodle = new window.zoo.Dog('charlie');
            var date = new Date();
            assert.instanceOf(poodle, window.zoo.Dog, 'poodle is dog object');
            assert.instanceOf(poodle, window.zoo.Animal, 'poodle is Animal object');
            assert.strictEqual(poodle.name, 'charlie', 'poodle has name');
            assert.strictEqual(poodle.dateOfBirth.getFullYear(), date.getFullYear(), 'poodle birth year matches');
            assert.strictEqual(poodle.dateOfBirth.getMonth(), date.getMonth(), 'poodle birth month matches');
            assert.strictEqual(poodle.dateOfBirth.getDate(), date.getDate(), 'poodle birth date matches');
        });

        test('dog can give birth', function(){
            var terrier = new window.zoo.Dog('chad');
            assert.isFunction(terrier.birth, 'terrier has a birth function');
            assert.isObject(terrier.birth(), 'terrier returns object');
            // but was it a Dog that was returned?
            // and can we call this multiple times??
            // can birth() work without a name?
        });

        test('dog can howl', function() {
            var husky = new window.zoo.Dog('indy');
            assert.instanceOf(husky, window.zoo.Dog, 'husky is dog object');
            assert.ok(husky.howl, 'husky can howl');
            // but can we call the howl function?
        });

        test('dog object can reimplement toString method', function() {
            // probably don't need this since it is tested on Animal
            var collie = new window.zoo.Dog('lassie');
            assert.strictEqual(collie.toString(), 'I am an animal named lassie',
                'dog object can implement toString method');
        });
    });

})();

(function() {
    'use strict';

    var assert = window.chai.assert;

    suite('dog species', function(){

        test('dog constructor function inherits name and date of birth', function(){
            var poodle = new window.zoo.Dog('charlie');
            var date = new Date();
            assert.isObject(poodle, 'poodle is dog object');
            assert.strictEqual(poodle.name, 'charlie', 'poodle has name');
            assert.strictEqual(poodle.dateOfBirth.getFullYear(), date.getFullYear(), 'poodle birth year matches');
            assert.strictEqual(poodle.dateOfBirth.getMonth(), date.getMonth(), 'poodle birth month matches');
            assert.strictEqual(poodle.dateOfBirth.getDate(), date.getDate(), 'poodle birth date matches');
        });

        test('dog can give birth', function(){
            var terrier = new window.zoo.Dog('chad');
            assert.isFunction(terrier.birth, 'terrier has a birth function');
            assert.isObject(terrier.birth(), 'terrier returns object');
        });
    });

})();

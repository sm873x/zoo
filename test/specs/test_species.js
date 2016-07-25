(function() {
    'use strict';

    var assert = window.chai.assert;

    suite('species constructor function', function(){
        test('dog constructor function inherits name and date of birth', function(){
            var charlie = new window.zoo.Dog('charlie');
            var date = new Date();
            assert.strictEqual(charlie.name, 'charlie', 'dog has name');
            assert.strictEqual(charlie.dateOfBirth.getFullYear(), date.getFullYear(), 'dog birth year matches');
            assert.strictEqual(charlie.dateOfBirth.getMonth(), date.getMonth(), 'dog birth month matches');
            assert.strictEqual(charlie.dateOfBirth.getDate(), date.getDate(), 'dog birth date matches');
        });

        test('cat constructor function inherits name and date of birth', function(){
            var betty = new window.zoo.Cat('betty');
            var date = new Date();
            assert.strictEqual(betty.name, 'betty', 'cat has name');
            assert.strictEqual(betty.dateOfBirth.getFullYear(), date.getFullYear(), 'cat birth year matches');
            assert.strictEqual(betty.dateOfBirth.getMonth(), date.getMonth(), 'cat birth month matches');
            assert.strictEqual(betty.dateOfBirth.getDate(), date.getDate(), 'cat birth date matches');
        });

        test('bird constructor function inherits name and date of birth', function(){
            var ted = new window.zoo.Bird('ted');
            var date = new Date();
            assert.strictEqual(ted.name, 'ted', 'bird has name');
            assert.strictEqual(ted.dateOfBirth.getFullYear(), date.getFullYear(), 'bird birth year matches');
            assert.strictEqual(ted.dateOfBirth.getMonth(), date.getMonth(), 'bird birth month matches');
            assert.strictEqual(ted.dateOfBirth.getDate(), date.getDate(), 'bird birth date matches');
        });
    });
})();

(function() {
    'use strict';

    var assert = window.chai.assert;

    suite('species constructor function', function(){
        test('species constructor inherits name and date of birth', function(){
            var charlie = new window.zoo.Dog('charlie');
            var date = new Date();
            assert.strictEqual(charlie.name, 'charlie', 'species has name');
            assert.strictEqual(charlie.dateOfBirth.getFullYear(), date.getFullYear(), 'species birth year matches');
            assert.strictEqual(charlie.dateOfBirth.getMonth(), date.getMonth(), 'species birth month matches');
            assert.strictEqual(charlie.dateOfBirth.getDate(), date.getDate(), 'species birth date matches');
        });
    });
})();

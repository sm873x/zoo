(function() {
    'use strict';

    var assert = window.chai.assert;

    suite('bird species', function() {
        test('bird constructor function inherits name and date of birth', function(){
            var parrot = new window.zoo.Bird('ted');
            var date = new Date();
            assert.instanceOf(parrot, window.zoo.Bird, 'parrot is bird object');
            assert.strictEqual(parrot.name, 'ted', 'parrot has name');
            assert.strictEqual(parrot.dateOfBirth.getFullYear(), date.getFullYear(), 'parrot birth year matches');
            assert.strictEqual(parrot.dateOfBirth.getMonth(), date.getMonth(), 'parrot birth month matches');
            assert.strictEqual(parrot.dateOfBirth.getDate(), date.getDate(), 'parrot birth date matches');
        });

        test('bird can lay one or more eggs', function() {
            var canary = new window.zoo.Bird('penny');
            assert.isFunction(canary.lay, 'canary has lay egg function');
            assert.isObject(canary.lay(), 'canary returns egg object');
        });
    });

})();

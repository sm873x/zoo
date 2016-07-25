(function() {
    'use strict';

    var assert = window.chai.assert;

    suite('Animal constructor function', function() {
        test('ensure Animal constructor function exists', function() {
            assert.ok(window.zoo.Animal, 'Animal function exists');
            assert.strictEqual(typeof(window.zoo.Animal), 'function', 'Animal is a function' );
            console.log(window.zoo.Animal);
        });

        test('Animals have a name and date of birth', function() {
            var fred = new window.zoo.Animal('fred');
            var date = new Date();
            console.log(fred);
            assert.strictEqual(fred.name, 'fred', 'Animal has name');
            assert.strictEqual(fred.dateOfBirth.getYear(), date.getYear(), 'animal birth year matches');
            assert.strictEqual(fred.dateOfBirth.getMonth(), date.getMonth(), 'animal birth month matches');
            assert.strictEqual(fred.dateOfBirth.getDate(), date.getDate(), 'animal birth date matches');
        });

        // test('Animals have method for determining age in years', function() {
        //     var now = Date.now();
        //
        // });
    });

    suite('species function', function(){

    });
})();

(function() {
    'use strict';

    var assert = window.chai.assert;

    suite('Animal constructor function', function() {

        test('ensure Animal constructor function exists', function() {
            assert.ok(window.zoo.Animal, 'Animal function exists');
            assert.strictEqual(typeof(window.zoo.Animal), 'function', 'Animal is a function' );
        });

        // test('Animals have a name and DOB', function() {
        //
        // });
        //
        // test('Animals have method for determining age in years', function() {
        //
        // });
    });
})();

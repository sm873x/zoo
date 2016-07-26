(function() {
    'use strict';

    var assert = window.chai.assert;

    suite('bird species', function() {
        test('bird constructor function inherits name and date of birth', function(){
            var robin = new window.zoo.Bird('ted');
            var date = new Date();
            assert.instanceOf(robin, window.zoo.Bird, 'robin is bird object');
            assert.strictEqual(robin.name, 'ted', 'robin has name');
            assert.strictEqual(robin.dateOfBirth.getFullYear(), date.getFullYear(), 'robin birth year matches');
            assert.strictEqual(robin.dateOfBirth.getMonth(), date.getMonth(), 'robin birth month matches');
            assert.strictEqual(robin.dateOfBirth.getDate(), date.getDate(), 'robin birth date matches');
        });

        test('bird can lay one or more eggs', function() {
            var canary = new window.zoo.Bird('penny');
            assert.isFunction(canary.lay, 'canary has lay egg function');
            assert.isObject(canary.lay(), 'canary returns egg object');
        });

        test('parrot can speak', function() {
            var parrot = new window.zoo.Bird('penny');
            var wordArr = [ 'apple', 'carrot', 'nuts' ];
            var speed = window.zoo.Parrot.prototype.speechSpeed( wordArr, 5);
            assert.instanceOf(parrot, window.zoo.Bird, 'parrot is bird object');
            assert.ok(wordArr, 'parrot has words they can speak');
            assert.strictEqual(speed, (3/5), 'parrot has speech speed');
        });

        test('bird object can reimplement toString method', function() {
            var swan = new window.zoo.Bird('wanda');
            console.log(swan.toString());
            assert.strictEqual(swan.toString(), '[object Object]', 'wanda inherits methods from bird object');
        });
    });

})();

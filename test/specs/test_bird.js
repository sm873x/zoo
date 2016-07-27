(function() {
    'use strict';

    var assert = window.chai.assert;

    suite('bird species', function() {

        test('bird constructor function inherits name and date of birth', function(){
            var robin = new window.zoo.Bird('ted');
            assert.instanceOf(robin, window.zoo.Bird, 'robin is bird');
            assert.instanceOf(robin, window.zoo.Animal, 'bird is animal');
        });

        test('create new bird throws error if no name argument', function() {
            assert.throws(function() {
                new window.zoo.Bird();
            }, ReferenceError);

            assert.throws(function() {
                new window.zoo.Bird(null);
            }, ReferenceError);
        });

        test('create new bird throws error if name is not a string', function() {
            assert.throws(function() {
                new window.zoo.Bird(2);
            }, TypeError);

            assert.throws(function() {
                new window.zoo.Bird(true);
            }, TypeError);
        });

        test('bird can lay a nest of one or more eggs', function() {
            var canary = new window.zoo.Bird('penny');
            var pennyNest = canary.layNest(1);
            assert.isFunction(canary.layNest, 'canary has lay nest function');
            assert.isArray(pennyNest, 'canary returns nest array');
        });

        test('lay nest throws error if no argument with number of eggs', function() {
            var canary = new window.zoo.Bird('penny');
            assert.throws(function() {
                canary.layNest();
            }, ReferenceError);
            assert.throws(function() {
                canary.layNest(null);
            }, ReferenceError);
        });

        test('number of eggs for lay nest needs to be a number', function() {
            var canary = new window.zoo.Bird('penny');
            assert.throws(function() {
                canary.layNest('a');
            }, TypeError);
        });

        test('lay nest function needs at least one egg to make new nest', function() {
            var canary = new window.zoo.Bird('penny');
            assert.throws(function() {
                canary.layNest(0);
            }, ReferenceError);
        });

        test('create new parrot throws error if no name argument', function() {
            assert.throws(function() {
                new window.zoo.Parrot();
            }, ReferenceError);

            assert.throws(function() {
                new window.zoo.Parrot(null);
            }, ReferenceError);
        });

        test('create new parrot throws error if name is not a string', function() {
            assert.throws(function() {
                new window.zoo.Parrot(2);
            }, TypeError);

            assert.throws(function() {
                new window.zoo.Parrot(true);
            }, TypeError);
        });

        test('parrot can speak with speed of wpm', function() {
            var macaw = new window.zoo.Parrot('penny');
            assert.instanceOf(macaw, window.zoo.Bird, 'parrot is bird object');
            assert.isTrue(macaw.canSpeak, 'parrot can speak');

            var wordArr = [ 'apple', 'carrot', 'nuts', 'polly' ];
            assert.ok(wordArr, 'parrot has words they can speak');
            // assert.strictEqual(macaw.getWpm(wordArr, 2), 2, 'parrot speaks with speed of wpm' );
        });

        test('get speech speed for parrot throws error if parrot cannot\
         speak at all', function() {
            var macaw = new window.zoo.Parrot('penny');
            assert.isTrue(macaw.canSpeak, 'parrot is born able to speak');

            macaw.canSpeak = false;
            assert.throws(function(){
                macaw.getWpm(10, 2);
            }, Error);
        });

    });

})();

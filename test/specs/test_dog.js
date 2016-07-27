(function() {
    'use strict';

    var assert = window.chai.assert;

    suite('dog species', function(){

        test('create new dog function is animal object', function(){
            var poodle = new window.zoo.Dog('charlie');
            assert.instanceOf(poodle, window.zoo.Dog, 'poodle is dog object');
            assert.instanceOf(poodle, window.zoo.Animal, 'poodle is Animal object');
        });

        test('create new dog function throws error if no name argument', function() {
            assert.throws(function() {
                new window.zoo.Dog();
            }, ReferenceError);

            assert.throws(function() {
                new window.zoo.Dog(null);
            }, ReferenceError);
        });

        test('create new dog function throws error if name is not a string', function() {
            assert.throws(function() {
                new window.zoo.Dog(2);
            }, TypeError);

            assert.throws(function() {
                new window.zoo.Dog(true);
            }, TypeError);
        });

        test('dog can give birth', function(){
            var terrier = new window.zoo.Dog('emily');
            var puppy = terrier.birth('buddy');
            var twoPuppies = terrier.birth('one').birth('two');
            assert.isOk(puppy, 'terrier has a birth function');
            assert.instanceOf(puppy, window.zoo.Dog);
            assert.isOk(twoPuppies, 'birth function can be called multiple times');
        });

        test('birth function throws error if no puppy name argument', function() {
            var terrier = new window.zoo.Dog('emily');
            assert.throws(terrier.birth, ReferenceError);

            assert.throws(function() {
                terrier.birth(null);
            }, ReferenceError);
        });

        test('birth function throws error if puppy name is not a string', function() {
            var terrier = new window.zoo.Dog('emily');
            assert.throws(function() {
                terrier.birth(2);
            }, TypeError);

            assert.throws(function() {
                terrier.birth(true);
            }, TypeError);
        });

        test('dog can howl', function() {
            var husky = new window.zoo.Dog('indy');
            assert.isFunction(husky.getHowlTime, 'getHowlTime is a function');
            assert.strictEqual(husky.getHowlTime(4, 2), 8, 'successful\
                getHowlTime means dog can howl');
        });

        test('dog cannot howl without arguments', function() {
            var direwolf = new window.zoo.Dog('trevor');
            assert.throws(direwolf.getHowlTime, TypeError);
        });

        test('dog cannot howl if arguments are NaN', function() {
            var direwolf = new window.zoo.Dog('trevor');
            assert.throws(function() {
                direwolf.getHowlTime('a', NaN);
            }, TypeError);
        });

        test('dog cannot howl if either argument is 0', function() {
            var direwolf = new window.zoo.Dog('trevor');
            assert.throws(function() {
                direwolf.getHowlTime(0, 2);
            }, TypeError);
            
            assert.throws(function() {
                direwolf.getHowlTime(2, 0);
            }, TypeError);
        });
    });

})();


//
// try {
//     var noHowl = husky.getHowlTime();
//     assert.fail('no getHowlTime w/o if arguments undefined');
// } catch(err) {
//     //assert error is what you expect
//     assert.instanceOf(err, Error)
// }

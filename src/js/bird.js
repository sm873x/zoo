(function(ns) {
    'use strict';

    window.zoo = ns = ( ns || {} );

    /**
     * Constructor fn creates new bird object
     * @param {String || Number} name Name of bird created
     */
    ns.Bird = function Bird(name) {
        if (!name) {
            throw new ReferenceError ('Bird must have name');
        } else if (typeof(name) !== 'string') {
            throw new TypeError ('Your Bird name is invalid');
        }

        ns.Animal.call(this, name);
    };
    ns.Bird.prototype = Object.create(ns.Animal.prototype);
    ns.Bird.prototype.constructor = ns.Bird;

    /**
     * A bird creats a nest of new birds
     * @param {Number} numEggs Number of eggs the bird lays
     * @return {Nest} An array of new birds
     */
    ns.Bird.prototype.layNest = function layNest(numEggs) {
        if (!numEggs) {
            throw new ReferenceError ('Bird needs to lay eggs to make new birds');
        } else if (!Number(numEggs)) {
            throw new TypeError ('number of eggs needs to be number only ');
        } else if (numEggs < 1) {
            throw new ReferenceError ('Bird needs to lay at least one egg to\
                                        make new bird');
        }

        var nest = [];

        var i;
        for (i=0; i <= numEggs; i++) {
            nest.push(new ns.Bird('babybird' + i));
        }

        return nest;
    };

    /**
     * Constructor fn to create new parrots
     * @param {String} name Name of parrot created
     */
    ns.Parrot = function Parrot(name) {
        if (!name) {
            throw new ReferenceError ('Parrot must have name');
        } else if (typeof(name) !== 'string') {
            throw new TypeError ('Your parrot name is invalid');
        }

        ns.Bird.call(this, name);
        this.canSpeak = true;
    };
    ns.Parrot.prototype = Object.create(ns.Bird.prototype);
    ns.Parrot.prototype.constructor = ns.Parrot;

    /**
     * Get words per minute spoken by parrot
     * @param  {Array || Array-like object} words  Array of words spoken by parrot
     * @param  {Number} minutes Number of minutes needed by parrot to speak all words
     * @return {Number}   Words spoken per minute by parrot
     */
    ns.Parrot.prototype.getWpm = function getWPM(words, minutes) {
        if (ns.Parrot.canSpeak !== true) {
            throw new Error ('This parrot cannot speak');
        }
        if (!words || !minutes) {
            throw new ReferenceError ('No words to speak');
        } else if ( typeof(words) !== 'object' || (typeof(minutes) !== 'number')) {
            throw new TypeError ('Words are not in an array object and\
                                        minutes are not numbers');
        }

        var wpm = ( (words.length) / minutes );
        return wpm;
    };

})(window.zoo);

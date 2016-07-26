(function(ns) {
    'use strict';

    window.zoo = ns = ( ns || {} );

    /**
     * Constructor fn for bird species
     * @param {String} name Name of bird
     */
    ns.Bird = function Bird(name) {
        ns.Animal.call(this, name);
    };
    ns.Bird.prototype = Object.create(ns.Animal.prototype);
    ns.Bird.prototype.constructor = ns.Bird;

    /**
     * Lay method called on bird object returns array
     * Length of returned array is randomly chosen b/w 1 and 20.
     * @return {Array} An array of new bird objects
     */
    ns.Bird.prototype.lay = function() {
        var nest = [];
        var egg = Math.floor(Math.random() * 20);
        var i;
        for (i=0; i < egg; i++) {
            nest.push(new ns.Bird());
        }
        return nest;
    };

    /**
     * Constructor fn to create parrot object
     * @param {String} name Name of parrot
     */
    ns.Parrot = function Parrot(name) {
        ns.Bird.call(this, name);
    };
    ns.Parrot.prototype.constructor = ns.Parrot;

    /**
     * Speak method called on parrot object
     * Calls words per minute fn
     * @param  {Array} words  Array of words spoken by parrot
     * @param  {Number} minutes Number of minutes need by parrot to speak all words
     * @return {Number}   Words spoken per minute by parrot
     */
    ns.Parrot.prototype.speak = function wpm(words, minutes) {
        this.words = words;
        this.minutes = minutes;
        var wpm = (words.length) / minutes;
        return wpm;
    };

})(window.zoo);

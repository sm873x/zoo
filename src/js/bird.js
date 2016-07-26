(function(ns) {
    'use strict';

    window.zoo = ns = ( ns || {} );

    /**
     * Constructor fn creates new bird object
     * @param {String || Number} name Name of bird created
     */
    ns.Bird = function Bird(name) {
        ns.Animal.call(this, name);
    };
    ns.Bird.prototype = Object.create(ns.Animal.prototype);
    ns.Bird.prototype.constructor = ns.Bird;

    /**
     * Creates nest of new birds
     * @return {Array} A nest of eggs
     */
    ns.Bird.prototype.lay = function() {
        var nest = [];
        var egg = Math.floor(Math.random() * 20);
        var i;
        for (i=0; i <= egg; i++) {
            nest.push(new ns.Bird(i));
        }
        return nest;
    };

    /**
     * Constructor fn to create new parrots
     * @param {String} name Name of parrot created
     */
    ns.Parrot = function Parrot(name) {
        ns.Bird.call(this, name);
    };
    ns.Parrot.prototype.constructor = ns.Parrot;

    /**
     * Get words per minute of parrot
     * @param  {Array} words  Array of words spoken by parrot
     * @param  {Number} minutes Number of minutes needed by parrot to speak all words
     * @return {Number}   Words spoken per minute by parrot
     */
    ns.Parrot.prototype.speak = function wpm(words, minutes) {
        this.words = words;
        this.minutes = minutes;
        var wpm = (words.length) / minutes;
        return wpm;
    };

})(window.zoo);

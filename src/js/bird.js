(function(ns) {
    'use strict';

    window.zoo = ns = ( ns || {} );

    ns.Bird = function Bird(name) {
        ns.Animal.call(this, name);
    };
    ns.Bird.prototype = Object.create(ns.Animal.prototype);
    ns.Bird.prototype.constructor = ns.Bird;

    ns.Bird.prototype.lay = function() {
        var egg = new ns.Bird();
        return egg;
    };

    ns.Parrot = function Parrot(name) {
        ns.Bird.call(this, name);
    };
    ns.Parrot.prototype.constructor = ns.Parrot;

    ns.Parrot.prototype.speechSpeed = function(words, minutes) {
        this.words = words;
        this.minutes = minutes;
        var wpm = (words.length) / minutes;
        return wpm;
    };

})(window.zoo);

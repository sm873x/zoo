(function(ns) {
    'use strict';

    window.zoo = ns = ( ns || {} );

    ns.Bird = function Bird(name) {
        ns.Animal.call(this, name);
    };
    ns.Bird.prototype = Object.create(ns.Animal.prototype);
    ns.Bird.prototype.constructor = ns.Bird;

    ns.Bird.prototype.lay = function() {
        var nest = [];
        var egg = Math.floor(Math.random() * 20);
        var i; 
        for (i=0; i < egg; i++) {
            nest.push(new ns.Bird());
        }
        return nest;
    };

    ns.Parrot = function Parrot(name) {
        ns.Bird.call(this, name);
    };
    ns.Parrot.prototype.constructor = ns.Parrot;

    ns.Parrot.prototype.speak = function wpm(words, minutes) {
        this.words = words;
        this.minutes = minutes;
        var wpm = (words.length) / minutes;
        return wpm;
    };

})(window.zoo);

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

})(window.zoo);

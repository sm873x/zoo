(function(ns) {
    'use strict';

    window.zoo = ns = ( ns || {} );

    ns.Dog = function Dog(name) {
        ns.Animal.call(this, name);
    };
    ns.Dog.prototype = Object.create(ns.Animal.prototype);
    ns.Dog.prototype.constructor = ns.Dog;

    ns.Dog.prototype.birth = function() {
        return new ns.Dog();
    };

})(window.zoo);

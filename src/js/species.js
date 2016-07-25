(function(ns) {
    'use strict';

    window.zoo = ns = ( ns || {} );

    ns.Dog = function Dog(name) {
        ns.Animal.call(this, name);
    };
    ns.Dog.prototype = Object.create(ns.Animal.prototype);
    ns.Dog.prototype.constructor = ns.Dog;

    ns.Cat = function Cat(name) {
        ns.Animal.call(this, name);
    };
    ns.Cat.prototype = Object.create(ns.Animal.prototype);
    ns.Cat.prototype.constructor = ns.Cat;

})(window.zoo);

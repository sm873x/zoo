(function(ns) {
    'use strict';

    window.zoo = ns = ( ns || {} );

    ns.Animal = function Animal(name) {
        // console.log('Animal constructor fn');
        this.name = name;
        this.dateOfBirth = new Date();
    };
    ns.Animal.prototype.age = function() {
        var now = new Date();
        var age = now - this.dateOfBirth;
        return age;
    };

    // ns.Species = function Species(name, dateOfBirth) {
    //     Atom.call(this, name, dateOfBirth);
    //
    // };
})(window.zoo);

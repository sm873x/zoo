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
        var age = (this.dateOfBirth.getFullYear()) - (now.getFullYear());
        return age;
    };
    
})(window.zoo);
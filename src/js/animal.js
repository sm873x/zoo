(function(ns) {
    'use strict';

    window.zoo = ns = ( ns || {} );

    /**
     * Constructor fn for animal with name and DOB
     * @param {String} name Name of animal
     */
    ns.Animal = function Animal(name) {
        this.name = name;
        this.dateOfBirth = new Date();
    };

    /**
     * Method to get age of animal
     * @return {Number} Age of animal
     */
    ns.Animal.prototype.age = function() {
        var now = new Date();
        var age = (this.dateOfBirth.getFullYear()) - (now.getFullYear());
        return age;
    };

    /**
     * ToString method on animal object
     * @return {String} Sentence with name of animal
     */
    ns.Animal.prototype.toString = function() {
        return 'I am an animal named ' + this.name;
    };
})(window.zoo);

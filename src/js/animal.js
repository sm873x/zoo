(function(ns) {
    'use strict';

    window.zoo = ns = ( ns || {} );

    /**
     * Constructor function that creates new animal
     * @param {String || Number} name Name of animal being created
     * @return {Animal}     A new animal
     */
    ns.Animal = function Animal(name) {
        if (!name) {
            this.name = 'animal';
        } else {
            this.name = name;
        }

        this.dateOfBirth = new Date();
    };

    /**
     * Gets the age in years of the given animal
     * @return {Number} Age of animal in years
     */
    ns.Animal.prototype.getAge = function getAge() {
        var now = new Date();
        var age = ((now.getFullYear() - this.dateOfBirth.getFullYear()) );
        return age;
    };

    /**
     * Give sentence naming the animal
     * @return {String} Sentence with name of animal
     */
    ns.Animal.prototype.toString = function nameAnimal() {
        return 'I am an animal named ' + this.name;
    };
})(window.zoo);

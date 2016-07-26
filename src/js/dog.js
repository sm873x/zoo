(function(ns) {
    'use strict';

    window.zoo = ns = ( ns || {} );

    /**
     * Constructor fn for dog species
     * @param {String} name Name of dog
     */
    ns.Dog = function Dog(name) {
        ns.Animal.call(this, name);
    };
    ns.Dog.prototype = Object.create(ns.Animal.prototype);
    ns.Dog.prototype.constructor = ns.Dog;

    /**
     * Method for new dog births
     * Indicative of mammalian species
     * @param  {String} puppy Name of puppy born
     * @return {Object} New dog object
     */
    ns.Dog.prototype.birth = function(puppy) {
        return new ns.Dog(puppy);
    };

    /**
     * A howl method on a dog object returns a howl
     * @param  {String} howl A type of sound
     * @return {String}     Returns a howl
     */
    ns.Dog.prototype.howl = function(howl) {
        this.howl = howl;
        return howl;
    };

})(window.zoo);

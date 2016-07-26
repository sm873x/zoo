(function(ns) {
    'use strict';

    window.zoo = ns = ( ns || {} );

    /**
     * Constructor function that creates a new dog
     * @param {String} name Name of dog being created
     * @return {Dog}        A new dog
     */
    ns.Dog = function Dog(name) {
        ns.Animal.call(this, name);
    };
    ns.Dog.prototype = Object.create(ns.Animal.prototype);
    ns.Dog.prototype.constructor = ns.Dog;

    /**
     * Creates new dog
     * @param  {String} puppy Name of new dog
     * @return {Dog}          A new dog
     */
    ns.Dog.prototype.birth = function birth(puppyName) {
        return new ns.Dog(puppyName);
    };

    /**
     * Get total duration in minutes of dog howls
     * @param  {Number} howls Number of howls
     * @param  {Number} times Duration of each howl in minutes
     * @return {Number}       Duration of all howls
     */
    ns.Dog.prototype.howlTime = function howlTime(howls, time) {
        if (!Number(howls) || !Number(time)) {
            throw new Error('Your dog howls and time are not valid');
        } else if (howls === 0 || time === 0 ) {
            throw new Error('There are no dog howls');
        } else if (!howls || !time) {
            throw new Error('Your dog howls don\'t exist');
        }

        var totalHowl = howls * time;
        return totalHowl;
    };

})(window.zoo);

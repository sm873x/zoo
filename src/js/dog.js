(function(ns) {
    'use strict';

    window.zoo = ns = ( ns || {} );

    /**
     * Constructor function that creates a new dog
     * @param {String} name Name of dog being created
     * @return {Dog}        A new dog
     */
    ns.Dog = function Dog(name) {
        if (!name) {
            throw new ReferenceError ('Dog must have name');
        } else if (typeof(name) !== 'string') {
            throw new TypeError ('Your dog name is invalid');
        }
        ns.Animal.call(this, name);
    };
    ns.Dog.prototype = Object.create(ns.Animal.prototype);
    ns.Dog.prototype.constructor = ns.Dog;

    /**
     * Creates new dog
     * @param  {String} puppyName Name of new dog
     * @return {Dog}          A new dog
     */
    ns.Dog.prototype.birth = function birth(puppyName) {
        if (!puppyName) {
            throw new ReferenceError ('Puppy must have name');
        } else if (typeof(puppyName) !== 'string') {
            throw new TypeError ('Your puppy name is invalid');
        }

        var name = String(puppyName);
        return new ns.Dog(name);
    };

    /**
     * Get total duration in minutes of dog howls
     * @param  {Number} howls Number of howls
     * @param  {Number} times Duration of each howl in minutes
     * @return {Number}       Duration of all howls in minutes
     */
    ns.Dog.prototype.getHowlTime = function getHowlTime(howls, time) {
        if (!Number(howls) || !Number(time)) {
            throw new TypeError('Your dog howls and time are not valid');
        } else if (howls === 0 || time === 0 ) {
            throw new TypeError('There are no dog howls');
        } else if (!howls || !time) {
            throw new TypeError('Your dog howls don\'t exist');
        }

        var howlTime = howls * time;
        return howlTime;
    };

})(window.zoo);

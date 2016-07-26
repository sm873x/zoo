(function(ns) {
    'use strict';

    window.zoo = ns = ( ns || {} );

    /**
     * Constructor function that creates new animal
     * @param {String} name Name of animal being created
     * @return {Animal}     A new animal
     */
    ns.Animal = function Animal(name) {
        this.name = name;
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

(function(ns) {
    'use strict';

    window.zoo = ns = ( ns || {} );

    /**
     * Constructor fn for bird species
     * @param {String} name Name of bird
     */
    ns.Bird = function Bird(name) {
        ns.Animal.call(this, name);
    };
    ns.Bird.prototype = Object.create(ns.Animal.prototype);
    ns.Bird.prototype.constructor = ns.Bird;

    /**
     * Lay method called on bird object returns array
     * Length of returned array is randomly chosen b/w 1 and 20.
     * @return {Array} An array of new bird objects
     */
    ns.Bird.prototype.lay = function() {
        var nest = [];
        var egg = Math.floor(Math.random() * 20);
        var i;
        for (i=0; i < egg; i++) {
            nest.push(new ns.Bird());
        }
        return nest;
    };

    /**
     * Constructor fn to create parrot object
     * @param {String} name Name of parrot
     */
    ns.Parrot = function Parrot(name) {
        ns.Bird.call(this, name);
    };
    ns.Parrot.prototype.constructor = ns.Parrot;

    /**
     * Speak method called on parrot object
     * Calls words per minute fn
     * @param  {Array} words  Array of words spoken by parrot
     * @param  {Number} minutes Number of minutes need by parrot to speak all words
     * @return {Number}   Words spoken per minute by parrot
     */
    ns.Parrot.prototype.speak = function wpm(words, minutes) {
        this.words = words;
        this.minutes = minutes;
        var wpm = (words.length) / minutes;
        return wpm;
    };

})(window.zoo);

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

//# sourceMappingURL=main.js.map
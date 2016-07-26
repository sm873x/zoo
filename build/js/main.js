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
    ns.Animal.prototype.age = function age() {
        var now = new Date();
        var age = ((now.getFullYear() - this.dateOfBirth.getFullYear()) );
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

//# sourceMappingURL=main.js.map
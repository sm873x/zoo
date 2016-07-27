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
        this.isDead = false;
    };

    /**
     * Kills the animal
     * @return {Animal} Animal that is dead
     */
    ns.Animal.prototype.expire = function expire() {
        this.isDead = true;
    };

    /**
     * Gets the age in years of the given animal
     * @return {Number} Age of animal in years
     */
    ns.Animal.prototype.getAge = function getAge() {
        if (this.isDead === true) {
            throw new Error('The animal is dead');
        }
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
     * Constructor fn creates new bird object
     * @param {String || Number} name Name of bird created
     */
    ns.Bird = function Bird(name) {
        if (!name) {
            throw new ReferenceError ('Bird must have name');
        } else if (typeof(name) !== 'string') {
            throw new TypeError ('Your Bird name is invalid');
        }

        ns.Animal.call(this, name);
    };
    ns.Bird.prototype = Object.create(ns.Animal.prototype);
    ns.Bird.prototype.constructor = ns.Bird;

    /**
     * A bird creats a nest of new birds
     * @param {Number} numEggs Number of eggs the bird lays
     * @return {Nest} An array of new birds
     */
    ns.Bird.prototype.layNest = function layNest(numEggs) {
        if (!numEggs) {
            throw new ReferenceError ('Bird needs to lay eggs to make new birds');
        } else if (!Number(numEggs)) {
            throw new TypeError ('number of eggs needs to be number only ');
        } else if (numEggs < 1) {
            throw new ReferenceError ('Bird needs to lay at least one egg to\
                                        make new bird');
        }

        var nest = [];

        var i;
        for (i=0; i <= numEggs; i++) {
            nest.push(new ns.Bird('babybird' + i));
        }

        return nest;
    };

    /**
     * Constructor fn to create new parrots
     * @param {String} name Name of parrot created
     */
    ns.Parrot = function Parrot(name) {
        if (!name) {
            throw new ReferenceError ('Parrot must have name');
        } else if (typeof(name) !== 'string') {
            throw new TypeError ('Your parrot name is invalid');
        }

        ns.Bird.call(this, name);
        this.canSpeak = true;
    };
    ns.Parrot.prototype = Object.create(ns.Bird.prototype);
    ns.Parrot.prototype.constructor = ns.Parrot;

    /**
     * Get words per minute spoken by parrot
     * @param  {Array || Array-like object} words  Array of words spoken by parrot
     * @param  {Number} minutes Number of minutes needed by parrot to speak all words
     * @return {Number}   Words spoken per minute by parrot
     */
    ns.Parrot.prototype.getWpm = function getWPM(words, minutes) {
        if (ns.Parrot.canSpeak !== true) {
            throw new Error ('This parrot cannot speak');
        }
        if (!words || !minutes) {
            throw new ReferenceError ('No words to speak');
        } else if ( typeof(words) !== 'object' || (typeof(minutes) !== 'number')) {
            throw new TypeError ('Words are not in an array object and\
                                        minutes are not numbers');
        }

        var wpm = ( (words.length) / minutes );
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

//# sourceMappingURL=main.js.map
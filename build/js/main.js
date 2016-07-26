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

    ns.Animal.prototype.toString = function() {
        return 'I am an animal named ' + this.name;
    };
})(window.zoo);

(function(ns) {
    'use strict';

    window.zoo = ns = ( ns || {} );

    ns.Bird = function Bird(name) {
        ns.Animal.call(this, name);
    };
    ns.Bird.prototype = Object.create(ns.Animal.prototype);
    ns.Bird.prototype.constructor = ns.Bird;

    ns.Bird.prototype.lay = function() {
        var nest = [];
        var egg = Math.floor(Math.random() * 20);
        var i; 
        for (i=0; i < egg; i++) {
            nest.push(new ns.Bird());
        }
        return nest;
    };

    ns.Parrot = function Parrot(name) {
        ns.Bird.call(this, name);
    };
    ns.Parrot.prototype.constructor = ns.Parrot;

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

    ns.Dog = function Dog(name) {
        ns.Animal.call(this, name);
    };
    ns.Dog.prototype = Object.create(ns.Animal.prototype);
    ns.Dog.prototype.constructor = ns.Dog;

    ns.Dog.prototype.birth = function() {
        return new ns.Dog();
    };

    ns.Dog.prototype.howl = function(howl) {
        this.howl = howl;
        return howl;
    };

})(window.zoo);

//# sourceMappingURL=main.js.map
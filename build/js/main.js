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

(function(ns) {
    'use strict';

    window.zoo = ns = ( ns || {} );

    ns.Dog = function Dog(name) {
        ns.Animal.call(this, name);
    };
    ns.Dog.prototype = Object.create(ns.Animal.prototype);
    ns.Dog.prototype.constructor = ns.Dog;

})(window.zoo);

//# sourceMappingURL=main.js.map
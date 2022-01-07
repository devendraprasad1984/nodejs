//Map.size is an example of getter
//usage of getter and setter is
//Sometimes you want to attach some properties directly to your constructor function, rather than to the prototype
let varyingSize = {
    get size() {
        return Math.floor(Math.random() * 100)
    }
}
console.log(varyingSize.size)


class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }

    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }

    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8;
    }

    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8);
    }
}

let temp = new Temperature(22);
console.log(Object.getPrototypeOf(temp))
console.log('fahrenheit from getter', temp.fahrenheit); //getter is called
temp.fahrenheit = 86; //setter is called
console.log('celsius from setter', temp.celsius);
Temperature.fromFahrenheit(100)
console.log('fahrenheit from getter --100', temp.fahrenheit, temp.celsius); //getter is called


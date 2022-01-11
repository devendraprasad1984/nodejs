// WeakMaps provide a way to extend objects from the outside without interfering with garbage collection. Whenever you want to extend an object but can't because it is sealed - or from an external source - a WeakMap can be applied.
//
// A WeakMap is a map (dictionary) where the keys are weak - that is, if all references to the key are lost and there are no more references to the value - the value can be garbage collected. Let's show this first through examples, then explain it a bit and finally finish with real use.
//
// Let's say I'm using an API that gives me a certain object:

var obj = getObjectFromLibrary();

// Now, I have a method that uses the object:

function useObj(obj) {
    doSomethingWith(obj);
}

// I want to keep track of how many times the method was called with a certain object and report if it happens more than N times. Naively one would think to use a Map:

var map = new Map(); // maps can have object keys
function useObj(obj) {
    doSomethingWith(obj);
    var called = map.get(obj) || 0;
    called++; // called one more time
    if (called > 10) report(); // Report called more than 10 times
    map.set(obj, called);
}

// This works, but it has a memory leak - we now keep track of every single library object passed to the function which keeps the library objects from ever being garbage collected. Instead - we can use a WeakMap:

var map = new WeakMap(); // create a weak map
function useObj(obj) {
    doSomethingWith(obj);
    var called = map.get(obj) || 0;
    called++; // called one more time
    if (called > 10) report(); // Report called more than 10 times
    map.set(obj, called);
}

// And the memory leak is gone.
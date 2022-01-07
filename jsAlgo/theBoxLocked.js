const box = {
    locked: true,
    unlock() {
        this.locked = false;
    },
    lock() {
        this.locked = true;
    },
    _content: [],
    get isLock() {
        return this.locked
    },
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(func) {
    try {
        if (box.isLock) box.unlock()
        console.log('box is unlocked', box.content, box._content)
        func()
        if (!box.isLock) box.lock()
    } catch (e) {
        console.log('error', e)
    } finally {
        if (!box.isLock) box.lock()
    }
}

withBoxUnlocked(() => console.log('test box call'))

// Itisaboxwithalock. Thereisanarrayinthebox,butyoucangetatitonly when the box is unlocked. Directly accessing the private _content property is forbidden.
//     Write a function called withBoxUnlocked that takes a function value as ar- gument, unlocks the box, runs the function, and then ensures that the box is locked again before returning, regardless of whether the argument function returned normally or threw an exception.
//     For extra points, make sure that if you call withBoxUnlocked when the box is already unlocked, the box stays unlocked.
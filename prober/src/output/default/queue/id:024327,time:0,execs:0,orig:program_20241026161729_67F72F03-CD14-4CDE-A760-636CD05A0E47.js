for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
class C10 {
    constructor(a12) {
        Reflect.defineProperty(Uint8Array, 127, this);
    }
}
new C10();
class C18 {
    constructor(a20) {
        function f21(a22) {
            return this;
        }
        this.get = f21;
        for (let i26 = 10, i27 = 10; -13369 < i27; --i27) {
        }
        Reflect.defineProperty(Uint8Array, 127, this);
    }
}
new C18();
gc();

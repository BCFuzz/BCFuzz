const v2 = new Uint8ClampedArray(256);
class C3 {
    constructor(a5) {
        function f6() {
        }
        function f7(a8) {
            return a8;
        }
        Object.defineProperty(this, "enumerable", { configurable: true, enumerable: true, get: f6, set: f7 });
        Reflect.defineProperty(v2, 127, this);
    }
}
new C3(256);
gc();

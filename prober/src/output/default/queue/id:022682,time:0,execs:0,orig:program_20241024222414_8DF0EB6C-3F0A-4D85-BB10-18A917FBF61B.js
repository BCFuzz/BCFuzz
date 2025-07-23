for (let v1 = 0; v1 < 100; v1++) {
    function f2() {
        return Array;
    }
    class C3 extends Array {
        static #h;
    }
    Object.defineProperty(Array, "a", { configurable: true, enumerable: true, set: f2 });
}
gc();

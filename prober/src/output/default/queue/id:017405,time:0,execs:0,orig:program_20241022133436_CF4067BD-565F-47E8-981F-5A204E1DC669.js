for (let v1 = 0; v1 < 100; v1++) {
    function f2() {
        return v1;
    }
    Object.defineProperty(Array, "a", { configurable: true, enumerable: true, set: f2 });
}
([1886715396,-2147483647,-65536,-65536,6,6,-2147483647]).slice();
gc();

const v1 = Array(Array);
const v5 = new Uint8ClampedArray(255);
for (const v6 in v5) {
    const o7 = {
    };
    function f8() {
        return v6;
    }
    function f9(a10) {
        Object.defineProperty(o7, a10, { configurable: true, get: f9, set: f9 });
        o7[-1] = a10;
        v1.length ^= 65537;
        return o7;
    }
    Object.defineProperty(o7, "a", { configurable: true, enumerable: true, get: f8, set: f9 });
    o7.a = v6;
}
gc();

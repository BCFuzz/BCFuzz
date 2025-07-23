const v2 = new Uint8ClampedArray(255);
for (const v3 in v2) {
    const o4 = {
    };
    function f5() {
        return f5;
    }
    function f6(a7) {
        const o10 = {
            "maxByteLength": 256,
        };
        const v12 = new SharedArrayBuffer(5, o10);
        v12.grow(256);
        const v15 = new DataView(v12);
        return v15.getFloat64(5);
    }
    Object.defineProperty(o4, "a", { configurable: true, enumerable: true, get: f5, set: f6 });
    o4.a = v3;
}
gc();

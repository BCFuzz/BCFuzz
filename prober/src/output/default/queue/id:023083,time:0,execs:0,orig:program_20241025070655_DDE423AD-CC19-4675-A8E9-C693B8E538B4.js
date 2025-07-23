for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v12 = new Uint8ClampedArray(255);
for (const v13 in v12) {
    const o14 = {
    };
    function f15() {
        return Uint8ClampedArray;
    }
    function f16(a17) {
        const o20 = {
            "maxByteLength": 256,
        };
        const v22 = new SharedArrayBuffer(5, o20);
        v22.grow(256);
        const v25 = new DataView(v22);
        return v25.setInt8(5, 5);
    }
    Object.defineProperty(o14, "a", { configurable: true, enumerable: true, get: f15, set: f16 });
    o14.a = v13;
}
gc();

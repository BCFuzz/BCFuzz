const v3 = new Uint32Array(257);
const v5 = new Uint8ClampedArray();
function f6(a7, a8, a9) {
    const o10 = {
        2: Uint32Array,
        2641: v5,
        ...a8,
    };
    return o10;
}
f6(256, v3);
Object.defineProperty(f6(), 5, { configurable: true, set: f6 });
gc();

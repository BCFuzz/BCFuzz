const v1 = new Map();
const v2 = v1.constructor;
const v3 = new v2();
for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
    const v15 = new Uint8ClampedArray(v2);
    v3.set(v15).delete(v15);
}
gc();

const v1 = new Map();
const v2 = v1.constructor;
const v3 = new v2(v1, v2);
for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
    const v15 = new Uint8ClampedArray(i7, v2, v2);
    const v16 = v3.set(v15);
    v16.set();
    v16.delete();
}
gc();

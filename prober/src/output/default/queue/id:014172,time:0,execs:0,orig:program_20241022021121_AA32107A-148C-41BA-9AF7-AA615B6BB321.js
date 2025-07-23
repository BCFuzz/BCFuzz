function f0() {
    return f0;
}
for (let v1 = 0; v1 < 5; v1++) {
    const v3 = new Set();
    v3.union(v3).has(f0);
}
const v8 = new Uint8ClampedArray(1262);
for (const v9 in v8) {
}
gc();

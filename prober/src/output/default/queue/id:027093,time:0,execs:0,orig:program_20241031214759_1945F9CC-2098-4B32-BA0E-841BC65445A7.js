function f0() {
    return f0;
}
const v2 = ++f0;
const v4 = new Uint32Array(1000);
for (const v5 in v4) {
    for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
    }
    const v17 = new Map();
    v17.set(v2, v17);
}
gc();

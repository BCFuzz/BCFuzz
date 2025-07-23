function f1(a2, a3) {
    const o4 = {
    };
    return o4;
}
Float32Array.toString = f1;
const v6 = new Int32Array(Int32Array);
for (let i9 = 0, i10 = 10; i10--, i9 < i10;) {
    const v19 = createGlobalObject().Atomics;
    try { v19.or(v6, i10, Float32Array); } catch (e) {}
}
gc();

function f0() {
    const o1 = {
    };
    return o1;
}
for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
}
const o15 = {
    "maxByteLength": 3614,
};
const v17 = new SharedArrayBuffer(3614, o15);
const v19 = new Int32Array(v17);
Object.defineProperty(v19, Symbol.toPrimitive, { writable: true, enumerable: true, value: f0 });
const v24 = createGlobalObject().Atomics;
try { v24.waitAsync(v19, 200, v19); } catch (e) {}
for (let i28 = 0, i29 = 10; i28 < i29; i29--) {
}
gc();

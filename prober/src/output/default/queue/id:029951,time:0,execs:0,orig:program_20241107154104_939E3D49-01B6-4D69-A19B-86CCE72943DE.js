for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
const o14 = {
    "maxByteLength": 3614,
};
const v16 = new SharedArrayBuffer(3614, o14);
const v18 = new Int32Array(v16);
createGlobalObject().Atomics.waitAsync(v18, 200, 450.35206857875596);
gc();

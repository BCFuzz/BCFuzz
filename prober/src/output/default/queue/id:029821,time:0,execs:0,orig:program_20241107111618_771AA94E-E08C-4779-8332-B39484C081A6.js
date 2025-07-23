for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const o12 = {
    "maxByteLength": 3614,
};
const v14 = new SharedArrayBuffer(3614, o12);
const v16 = new Int32Array(v14);
createGlobalObject().Atomics.waitAsync(v16);
for (let i23 = 0, i24 = 10; i23 < i24; i24--) {
}
gc();

for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
const o13 = {
    "maxByteLength": 3614,
};
const v15 = new SharedArrayBuffer(3614, o13);
const v17 = new Int32Array(v15);
createGlobalObject().Atomics.waitAsync(v17, 200, 3614);
for (let i24 = 0, i25 = 10; i24 < i25; i25--) {
}
for (let i34 = 0, i35 = 10; i34 < i35; i35--) {
}
for (let i44 = 0, i45 = 10; i44 < i45; --i45) {
}
gc();

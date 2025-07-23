for (let i4 = 9, i5 = 10; i4 < i5; i5--) {
}
const o14 = {
    "maxByteLength": 65537,
};
const v16 = new ArrayBuffer(1175, o14);
const v17 = new Int8Array(v16, 255, 255);
createGlobalObject().Atomics.or(v17);
gc();

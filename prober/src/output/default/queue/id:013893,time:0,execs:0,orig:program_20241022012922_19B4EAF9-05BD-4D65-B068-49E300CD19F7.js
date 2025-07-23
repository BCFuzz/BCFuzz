const o2 = {
    "maxByteLength": 14,
};
const v4 = new ArrayBuffer(9, o2);
const v6 = new Int32Array(v4);
for (let i = 0; i < 5; i++) {
    v6.byteOffset;
}
gc();

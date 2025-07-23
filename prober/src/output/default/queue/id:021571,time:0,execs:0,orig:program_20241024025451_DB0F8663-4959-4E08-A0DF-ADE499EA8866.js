const o2 = {
    "maxByteLength": 10000,
};
const v4 = new ArrayBuffer(9, o2);
const v6 = new Uint32Array(v4);
new Int16Array(v6);
for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
}
gc();

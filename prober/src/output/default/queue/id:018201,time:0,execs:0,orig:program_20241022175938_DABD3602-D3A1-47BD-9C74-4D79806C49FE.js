const o3 = {
    "maxByteLength": 15,
};
const v5 = new SharedArrayBuffer(15, o3);
const v6 = new Float64Array(v5);
new Int32Array(v6);
for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
}
for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
}
gc();

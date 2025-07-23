const o3 = {
    "maxByteLength": 11,
};
const v5 = new ArrayBuffer(5, o3);
const v7 = new Uint32Array(v5);
v5.transfer();
v7.length |= -42630997;
for (let i11 = 0, i12 = 1176; i12--, i11 < i12;) {
}
gc();

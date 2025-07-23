const o3 = {
    "maxByteLength": 11,
};
const v4 = new SharedArrayBuffer("o1nV", o3);
const v6 = new Int16Array(v4);
const v7 = v6.subarray();
for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
}
const t8 = createGlobalObject().Uint16Array;
new t8(v7);
gc();

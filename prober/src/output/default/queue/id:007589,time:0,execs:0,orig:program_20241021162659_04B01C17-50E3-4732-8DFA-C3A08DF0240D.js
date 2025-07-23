const o3 = {
    "maxByteLength": 136,
};
const v5 = new SharedArrayBuffer(2, o3);
const v7 = new Float64Array(v5);
v7.sort(Set);
gc();

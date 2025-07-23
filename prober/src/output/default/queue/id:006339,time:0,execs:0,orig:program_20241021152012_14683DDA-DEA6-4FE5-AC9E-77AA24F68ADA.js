const o3 = {
    "maxByteLength": 416,
};
const v5 = new SharedArrayBuffer(116, o3);
const v6 = new Float64Array(v5);
v6.slice();
gc();

const o2 = {
    "maxByteLength": 2361,
};
const v4 = new SharedArrayBuffer(2361, o2);
const v6 = new Uint32Array(v4);
Float64Array.from(v6);
gc();

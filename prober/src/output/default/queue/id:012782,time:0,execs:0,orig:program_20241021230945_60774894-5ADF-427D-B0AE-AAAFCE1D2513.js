const o2 = {
    "maxByteLength": 12,
};
const v4 = new SharedArrayBuffer(10, o2);
const v6 = new Uint16Array(v4);
new Float64Array(v6);
gc();

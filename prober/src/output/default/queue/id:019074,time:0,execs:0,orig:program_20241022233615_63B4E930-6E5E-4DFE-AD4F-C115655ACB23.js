const o2 = {
    "maxByteLength": 3992399768,
};
const v4 = new SharedArrayBuffer(5, o2);
const v6 = new Float64Array(v4);
new Float32Array(v6);
gc();

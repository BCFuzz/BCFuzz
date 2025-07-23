const v2 = new Float64Array(1024);
const o5 = {
    "maxByteLength": 268435439,
};
const v7 = new SharedArrayBuffer(3969, o5);
const v9 = new Float32Array(v7);
const v11 = new Uint16Array(1024);
v11["subarray"](..."subarray", ...v9, ...v2, ...v9);
gc();

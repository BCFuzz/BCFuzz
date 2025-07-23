const o2 = {
    "maxByteLength": 512,
};
const v4 = new SharedArrayBuffer(512, o2);
const v6 = new Float64Array(v4);
v6[0];
gc();

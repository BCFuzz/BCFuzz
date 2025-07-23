const v1 = new Int32Array();
const v2 = v1.constructor;
const v3 = [0.14309074985565318];
const o7 = {
    "maxByteLength": 268435441,
};
const v8 = new SharedArrayBuffer(11, o7);
const v9 = new v2(v8, v3, v8);
v9.sort();
gc();

const v1 = new Float64Array();
const v2 = v1.constructor;
const o5 = {
    "maxByteLength": 4010739806,
};
const v7 = new SharedArrayBuffer(4096, o5);
const v8 = new v2(v7, 4096, v2);
v8.sort();
gc();

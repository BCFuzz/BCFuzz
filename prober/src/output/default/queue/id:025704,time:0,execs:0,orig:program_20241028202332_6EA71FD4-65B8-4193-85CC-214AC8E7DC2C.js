const v1 = ([9,65535,61911]).copyWithin();
const o5 = {
    "maxByteLength": 4096,
};
const v7 = new ArrayBuffer(4096, o5);
const v8 = new Float32Array(v7);
v8.set(v1);
gc();

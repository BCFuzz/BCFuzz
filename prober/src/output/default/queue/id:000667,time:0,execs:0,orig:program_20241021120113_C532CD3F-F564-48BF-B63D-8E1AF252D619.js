const o1 = {
    ...true,
};
const v3 = new WeakMap();
const o6 = {
    "maxByteLength": 268435440,
};
const v8 = new ArrayBuffer(8, o6);
const v10 = new BigUint64Array(v8);
v3[v10];
gc();

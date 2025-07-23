const v1 = new BigUint64Array();
const o4 = {
    "maxByteLength": 2000,
};
const v6 = new ArrayBuffer(8, o4);
const v8 = new Uint32Array(v6, BigUint64Array, v1);
v8.sort();
gc();

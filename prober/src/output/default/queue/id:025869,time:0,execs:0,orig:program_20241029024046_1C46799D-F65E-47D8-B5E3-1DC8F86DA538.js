const v1 = new Int32Array();
const o4 = {
    "maxByteLength": 890,
};
const v6 = new ArrayBuffer(890, o4);
const v8 = new BigInt64Array(v6);
v8.with(v1, v1);
gc();

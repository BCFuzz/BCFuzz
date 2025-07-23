const o4 = {
    "maxByteLength": 23,
};
const v6 = new ArrayBuffer(23, o4);
const v8 = new BigInt64Array(v6, undefined, Uint16Array);
v8[1];
gc();

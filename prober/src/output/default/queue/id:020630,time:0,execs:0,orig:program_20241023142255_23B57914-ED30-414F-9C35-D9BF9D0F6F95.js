const o4 = {
    "maxByteLength": 536870889,
};
const v6 = new ArrayBuffer(128, o4);
const v8 = new BigUint64Array(v6);
v8[5n] = 2n;
gc();

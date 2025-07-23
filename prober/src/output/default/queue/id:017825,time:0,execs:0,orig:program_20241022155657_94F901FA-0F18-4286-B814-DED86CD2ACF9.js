const o2 = {
    "maxByteLength": 13,
};
const v4 = new SharedArrayBuffer(13, o2);
const v6 = new BigUint64Array(v4);
delete v6[394];
gc();

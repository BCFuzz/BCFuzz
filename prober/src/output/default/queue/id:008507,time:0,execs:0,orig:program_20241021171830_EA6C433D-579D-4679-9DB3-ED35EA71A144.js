const o2 = {
    "maxByteLength": 536870912,
};
const v4 = new ArrayBuffer(129, o2);
const v6 = new BigUint64Array(v4);
v6.buffer /= 3611;
gc();

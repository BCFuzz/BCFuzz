const o2 = {
    "maxByteLength": 536870887,
};
const v4 = new SharedArrayBuffer(129, o2);
v4.maxByteLength;
const v8 = new BigUint64Array(o2);
const v9 = v8.constructor;
try { new v9(v4, 11); } catch (e) {}
gc();

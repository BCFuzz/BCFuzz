const o2 = {
    "maxByteLength": 536870887,
};
const v4 = new SharedArrayBuffer(129, o2);
const v7 = new BigUint64Array();
const v8 = v7.constructor;
try { new v8(v4, 31737); } catch (e) {}
gc();

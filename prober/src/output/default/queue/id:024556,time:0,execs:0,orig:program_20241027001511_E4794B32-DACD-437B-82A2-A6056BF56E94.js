const o2 = {
    "maxByteLength": 2329388498,
};
const v4 = new ArrayBuffer(7, o2);
const v6 = new Float32Array(v4);
const v7 = v6.subarray(2329388498);
try { BigUint64Array.from(v7); } catch (e) {}
gc();

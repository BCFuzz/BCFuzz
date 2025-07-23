const o3 = {
    "maxByteLength": 2329388498,
};
const v5 = new ArrayBuffer(7, o3);
const v6 = new Float64Array(v5);
const v7 = v6.subarray();
try { BigUint64Array.from(v7); } catch (e) {}
gc();

const o2 = {
    "maxByteLength": 1737,
};
const v4 = new ArrayBuffer(512, o2);
const v6 = new BigInt64Array(v4);
try { v6.with(512, v4); } catch (e) {}
gc();

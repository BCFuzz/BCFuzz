const o2 = {
    "maxByteLength": 11,
};
const v4 = new ArrayBuffer(5, o2);
const v6 = new Float64Array(v4);
const v7 = v4.transfer();
try { v7.slice(v6); } catch (e) {}
gc();

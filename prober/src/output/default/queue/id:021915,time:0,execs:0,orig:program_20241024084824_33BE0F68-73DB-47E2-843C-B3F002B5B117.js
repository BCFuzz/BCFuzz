const o2 = {
    "maxByteLength": 536870888,
};
const v4 = new ArrayBuffer(6, o2);
const v6 = new Uint8ClampedArray(v4);
try { BigInt64Array.from(v6); } catch (e) {}
gc();

const v5 = createGlobalObject().Float16Array;
const o7 = {
    "maxByteLength": 80,
};
const v9 = new ArrayBuffer(6, o7);
const v10 = new v5(v9);
try { v10.__defineGetter__(257, BigInt64Array); } catch (e) {}
gc();

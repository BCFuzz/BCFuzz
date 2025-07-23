const v4 = createGlobalObject().Float16Array;
const o6 = {
    "maxByteLength": 80,
};
const v8 = new ArrayBuffer(6, o6);
const v9 = new v4(v8);
try { BigInt64Array.from(v9); } catch (e) {}
gc();

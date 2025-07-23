const v1 = new BigInt64Array();
const o2 = {
    __proto__: v1,
};
const v4 = new Int8Array();
try { v4.set(o2); } catch (e) {}
gc();

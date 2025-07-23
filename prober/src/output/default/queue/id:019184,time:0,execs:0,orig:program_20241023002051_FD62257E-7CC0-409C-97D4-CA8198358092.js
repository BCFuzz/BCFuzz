const v1 = new Int8Array();
const o2 = {
    __proto__: v1,
};
const v4 = new BigUint64Array();
try { v4.set(o2); } catch (e) {}
gc();

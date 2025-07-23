const v2 = new BigUint64Array(7);
const o3 = {
};
const v4 = o3.constructor;
try { v4.freeze(v2); } catch (e) {}
gc();

const v0 = [];
const o1 = {
};
const v3 = new Proxy(v0, o1);
const v5 = new BigInt64Array(v0, v0);
try { v5.toSorted(v3); } catch (e) {}
gc();

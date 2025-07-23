const v1 = new BigUint64Array();
const v3 = Symbol.for();
const o4 = {
    "a": v1,
};
const v5 = o4.a;
try { v5.toSorted(v3); } catch (e) {}
gc();

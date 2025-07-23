const v0 = [10,-12,127,175555839,47500,536870887];
let v2 = 268435440;
const v4 = ++v2 * v0;
const v5 = new BigUint64Array();
try { v5.toSorted(v4); } catch (e) {}
gc();

const v2 = new Uint8Array();
let v3 = 268435440;
const v5 = ++v3 * BigInt64Array;
try { v2.toSorted(v5); } catch (e) {}
gc();

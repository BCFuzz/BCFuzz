const v1 = new Int8Array();
const v2 = v1.toSorted;
try { v2.call(); } catch (e) {}
gc();

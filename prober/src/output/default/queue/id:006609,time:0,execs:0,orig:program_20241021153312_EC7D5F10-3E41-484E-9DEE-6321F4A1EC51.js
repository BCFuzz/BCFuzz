const v2 = new Int8Array();
const v3 = v2.toSorted;
try { v3.call(-9007199254740990n); } catch (e) {}
gc();

const v2 = new Float32Array();
const v3 = v2.toReversed;
try { v3.call(536870888n); } catch (e) {}
gc();

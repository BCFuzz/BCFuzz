const v1 = new Uint8Array();
const v4 = v1["copyWithin"]().subarray();
try { v4.set(); } catch (e) {}
gc();

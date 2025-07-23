const v1 = ~-1073741824n;
const v4 = new Int32Array();
try { v4.fill(143, v1); } catch (e) {}
gc();
